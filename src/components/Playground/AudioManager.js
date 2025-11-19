class AudioManager {
    constructor() {
        this.audioContext = null;
        this.analyser = null;
        this.dataArray = null;
        this.source = null;
        this.isInitialized = false;
    }

    async initialize() {
        if (this.isInitialized) return;

        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.analyser = this.audioContext.createAnalyser();
            this.analyser.fftSize = 512; // Resolution of frequency data

            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.source = this.audioContext.createMediaStreamSource(stream);
            this.source.connect(this.analyser);

            this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
            this.isInitialized = true;
        } catch (error) {
            console.error("Error accessing microphone:", error);
            throw error;
        }
    }

    getFrequencyData() {
        if (!this.isInitialized) return null;
        this.analyser.getByteFrequencyData(this.dataArray);
        return this.dataArray;
    }

    getAverageFrequency() {
        if (!this.isInitialized) return 0;
        this.analyser.getByteFrequencyData(this.dataArray);
        const sum = this.dataArray.reduce((a, b) => a + b, 0);
        return sum / this.dataArray.length;
    }

    dispose() {
        if (this.audioContext) {
            this.audioContext.close();
        }
        this.isInitialized = false;
    }
}

export default new AudioManager();
