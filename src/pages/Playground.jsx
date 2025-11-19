import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import AudioManager from '../components/Playground/AudioManager';
import './Playground.css';

const MODES = ['fluid', 'gravity', 'constellation', 'typography', 'audio'];

const Playground = () => {
    const canvasRef = useRef(null);
    const [mode, setMode] = useState('fluid');
    const modeRef = useRef('fluid');
    const [toast, setToast] = useState(null);
    const [showHelp, setShowHelp] = useState(true);

    const particlesRef = useRef([]);
    const hueRef = useRef(0);
    const mouseRef = useRef({ x: null, y: null });
    const textPointsRef = useRef([]); // For typography mode

    const showToast = useCallback((message) => {
        setToast(message);
        setTimeout(() => setToast(null), 2000);
    }, []);

    const handleModeChange = useCallback((newMode) => {
        setMode(newMode);
        modeRef.current = newMode;
        particlesRef.current = []; // Clear particles on switch
        showToast(`Mode: ${newMode.charAt(0).toUpperCase() + newMode.slice(1)}`);

        if (newMode === 'audio') {
            AudioManager.initialize().catch(err => {
                console.error("Audio init failed", err);
                showToast("Microphone access denied");
            });
        }

        if (newMode === 'typography') {
            sampleTextPoints();
        }
    }, [showToast]);

    // Typography: Sample points from text
    const sampleTextPoints = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.font = 'bold 20vw "Inter"';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('JENNA', canvas.width / 2, canvas.height / 2);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const points = [];

        // Sample every 10th pixel for performance
        for (let y = 0; y < canvas.height; y += 10) {
            for (let x = 0; x < canvas.width; x += 10) {
                const index = (y * canvas.width + x) * 4;
                if (data[index + 3] > 128) { // If pixel is visible
                    points.push({ x, y });
                }
            }
        }
        textPointsRef.current = points;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            if (modeRef.current === 'typography') sampleTextPoints();
        };

        class Particle {
            constructor(x, y, vx, vy, type) {
                this.x = x;
                this.y = y;
                this.vx = vx;
                this.vy = vy;
                this.type = type;
                this.life = 1;
                this.decay = Math.random() * 0.01 + 0.01;
                this.color = `hsl(${hueRef.current}, 100%, 50%)`;
                this.size = Math.random() * 5 + 2;
                this.target = null; // For typography

                if (type === 'gravity') {
                    this.gravity = 0.5;
                    this.bounce = -0.7;
                    this.life = 1;
                    this.decay = 0.005;
                }
                if (type === 'constellation') {
                    this.vx = (Math.random() - 0.5) * 2;
                    this.vy = (Math.random() - 0.5) * 2;
                    this.life = 1;
                    this.decay = 0.002;
                }
                if (type === 'typography') {
                    // Pick a random target point
                    if (textPointsRef.current.length > 0) {
                        this.target = textPointsRef.current[Math.floor(Math.random() * textPointsRef.current.length)];
                    }
                    this.life = 1;
                    this.decay = 0.005;
                    this.vx = (Math.random() - 0.5) * 2;
                    this.vy = (Math.random() - 0.5) * 2;
                }
                if (type === 'audio') {
                    this.vx = (Math.random() - 0.5) * 2;
                    this.vy = (Math.random() - 0.5) * 2;
                    this.life = 1;
                    this.decay = 0.01;
                }
            }

            update(audioData) {
                if (this.type === 'fluid') {
                    this.x += this.vx;
                    this.y += this.vy;
                    this.vx *= 0.95;
                    this.vy *= 0.95;
                    this.life -= this.decay;
                    this.size *= 0.95;
                } else if (this.type === 'gravity') {
                    this.vy += this.gravity;
                    this.x += this.vx;
                    this.y += this.vy;
                    if (this.y + this.size > canvas.height) {
                        this.y = canvas.height - this.size;
                        this.vy *= this.bounce;
                    }
                    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
                        this.vx *= -1;
                    }
                    this.life -= this.decay;
                } else if (this.type === 'constellation') {
                    this.x += this.vx;
                    this.y += this.vy;
                    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
                    this.life -= this.decay;
                } else if (this.type === 'typography') {
                    if (this.target) {
                        // Seek target
                        const dx = this.target.x - this.x;
                        const dy = this.target.y - this.y;
                        this.vx += dx * 0.005;
                        this.vy += dy * 0.005;
                        this.vx *= 0.9;
                        this.vy *= 0.9;
                        this.x += this.vx;
                        this.y += this.vy;
                    }
                    this.life -= this.decay;
                } else if (this.type === 'audio') {
                    this.x += this.vx;
                    this.y += this.vy;

                    // React to audio
                    if (audioData) {
                        const freqIndex = Math.floor(Math.random() * audioData.length);
                        const freq = audioData[freqIndex];
                        this.size = (freq / 255) * 20 + 2; // Pulse size
                        this.color = `hsl(${freq}, 100%, 50%)`; // Change color
                    }

                    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
                    this.life -= this.decay;
                }
            }

            draw() {
                ctx.fillStyle = this.color;
                if (this.type === 'fluid' || this.type === 'audio') {
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = this.color;
                } else {
                    ctx.shadowBlur = 0;
                }
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        const createParticles = (x, y, vx, vy) => {
            const currentMode = modeRef.current;
            const particles = particlesRef.current;

            // Limits
            const limit = currentMode === 'typography' ? 2000 : 300;
            if (particles.length > limit) particles.splice(0, 5);

            let count = currentMode === 'gravity' ? 1 : 2;
            if (currentMode === 'typography') count = 5;
            if (currentMode === 'audio') count = 1;

            for (let i = 0; i < count; i++) {
                particles.push(new Particle(
                    x,
                    y,
                    vx + (Math.random() - 0.5),
                    vy + (Math.random() - 0.5),
                    currentMode
                ));
            }
        };

        const handleInput = (x, y) => {
            if (mouseRef.current.x === null) {
                mouseRef.current = { x, y };
                return;
            }
            const vx = (x - mouseRef.current.x) * 0.2;
            const vy = (y - mouseRef.current.y) * 0.2;
            createParticles(x, y, vx, vy);
            mouseRef.current = { x, y };
            hueRef.current += 2;
        };

        const animate = () => {
            const currentMode = modeRef.current;
            const particles = particlesRef.current;

            // Audio Data
            let audioData = null;
            if (currentMode === 'audio') {
                audioData = AudioManager.getFrequencyData();
                // Auto-spawn particles in audio mode
                if (audioData && Math.random() > 0.8) {
                    createParticles(
                        Math.random() * canvas.width,
                        Math.random() * canvas.height,
                        0, 0
                    );
                }
            }

            // Clear Canvas
            if (currentMode === 'fluid' || currentMode === 'audio') {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Trails
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
            if (currentMode === 'fluid' || currentMode === 'audio') {
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            // Constellation Lines
            if (currentMode === 'constellation') {
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
                ctx.lineWidth = 1;
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 100) {
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }

            // Update & Draw
            for (let i = 0; i < particles.length; i++) {
                particles[i].update(audioData);
                particles[i].draw();
                if (particles[i].life <= 0 || particles[i].size <= 0.1) {
                    particles.splice(i, 1);
                    i--;
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        const onMove = (e) => handleInput(e.clientX, e.clientY);
        const onTouch = (e) => {
            e.preventDefault();
            handleInput(e.touches[0].clientX, e.touches[0].clientY);
        };

        window.addEventListener('mousemove', onMove);
        canvas.addEventListener('touchmove', onTouch, { passive: false });
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }, { passive: false });

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', onMove);
            canvas.removeEventListener('touchmove', onTouch);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key.toLowerCase()) {
                case '1': handleModeChange('fluid'); break;
                case '2': handleModeChange('gravity'); break;
                case '3': handleModeChange('constellation'); break;
                case '4': handleModeChange('typography'); break;
                case '5': handleModeChange('audio'); break;
                case ' ':
                    e.preventDefault();
                    const nextIndex = (MODES.indexOf(mode) + 1) % MODES.length;
                    handleModeChange(MODES[nextIndex]);
                    break;
                case 's': handleSave(); break;
                case 'h':
                    setShowHelp(prev => !prev);
                    showToast(showHelp ? "UI Hidden" : "UI Visible");
                    break;
                default: break;
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [mode, handleModeChange, showHelp]);

    // Initial Help Timer
    useEffect(() => {
        const timer = setTimeout(() => setShowHelp(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    const handleSave = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const link = document.createElement('a');
            link.download = 'jenna-eve-art.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
            showToast("Artwork Saved!");
        }
    };

    return (
        <motion.div
            className="playground-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Helmet>
                <title>Playground | Jenna Eve</title>
                <meta name="description" content="Interactive digital art playground." />
            </Helmet>

            <AnimatePresence>
                {toast && (
                    <motion.div
                        className="playground-toast"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        {toast}
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showHelp && (
                    <motion.div
                        className="playground-help"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="help-content">
                            <h1>Playground</h1>
                            <div className="shortcuts">
                                <p><span>1-5</span> Change Mode</p>
                                <p><span>Space</span> Cycle Mode</p>
                                <p><span>Drag</span> Paint</p>
                                <p><span>S</span> Save</p>
                                <p><span>H</span> Toggle Help</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="playground-ui">
                <div className="mode-switcher">
                    {MODES.map((m) => (
                        <button
                            key={m}
                            className={`mode-btn ${mode === m ? 'active' : ''}`}
                            onClick={() => handleModeChange(m)}
                        >
                            {m.charAt(0).toUpperCase() + m.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <canvas ref={canvasRef} className="playground-canvas" />
        </motion.div>
    );
};

export default Playground;
