$content = Get-Content -Path "mamamangos_source.html" -Raw

# Regex to capture relevant tags
# We want to capture the full tag to identify type, then extract content
$pattern = "(<h[1-6][^>]*>.*?<\/h[1-6]>)|(<p[^>]*>.*?<\/p>)|(<img[^>]*src=['""]([^'""]+)['""][^>]*>)"

$matches = [regex]::Matches($content, $pattern, "Singleline,IgnoreCase")

$results = @()

foreach ($match in $matches) {
    $val = $match.Value
    if ($val -match "^<h([1-6])") {
        $level = $matches[0].Groups[1].Value
        # Extract text
        $text = [regex]::Replace($val, "<[^>]+>", "").Trim()
        if ($text) {
            $results += @{ type = "header"; level = $level; content = $text }
        }
    }
    elseif ($val -match "^<p") {
        $text = [regex]::Replace($val, "<[^>]+>", "").Trim()
        if ($text) {
            $results += @{ type = "text"; content = $text }
        }
    }
    elseif ($val -match "^<img") {
        if ($val -match "src=['""]([^'""]+)['""]") {
            $src = $Matches[1]
            $results += @{ type = "image"; src = $src }
        }
    }
}

$results | ConvertTo-Json -Depth 3
