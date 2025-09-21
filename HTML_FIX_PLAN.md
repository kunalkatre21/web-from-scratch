# HTML Fix Plan

## Current Issue
The index.html file contains duplicate content with two body tags:
- First section (lines 17-137): Basic DaisyUI demo content
- Second section (lines 138-612): Portfolio content for Kunal Katre

## Required Changes
1. Remove the first section (lines 17-137) containing the basic DaisyUI demo
2. Keep only the portfolio content for Kunal Katre
3. Fix the HTML structure by removing the duplicate body tag
4. Ensure all necessary scripts and stylesheets are properly included

## New File Structure
The new index.html should have the following structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kunal Katre | Product Designer</title>
    
    <meta name="description" content="The career narrative of a product designer, evolving from Foundation to Builder to Platform Strategist.">
    <meta name="author" content="Kunal Katre">

    <link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Noto+Serif+JP:wght@600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="dist/output.css">
</head>
<body class="bg-gray-100 min-h-screen">
    <!-- Portfolio content for Kunal Katre (lines 138-612 from current file) -->
    <!-- Loading skeleton to prevent flash of unstyled content -->
    <div class="loading-skeleton">
        <div class="skeleton-content">
            <div class="skeleton-nav"></div>
            <div class="skeleton-hero">
                <div class="skeleton-text"></div>
                <div class="skeleton-text"></div>
                <div class="skeleton-buttons"></div>
            </div>
        </div>
    </div>

    <!-- [UPDATED] Text-based Preloader -->
    <div class="preloader">
        <div class="preloader-text">
            <span>Kunal Katre</span>
            <span>Lead Product Designer, Founding Designer & Systems Architect</span>
        </div>
    </div>

    <!-- Rest of the portfolio content -->
    <!-- ... (all the content from lines 159-611) -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
    <script src="script.js"></script>
    
    <!-- Theme Switching JavaScript -->
    <script>
        // Theme Management System
        // ... (all the JavaScript from lines 442-609)
    </script>
    <script src="test-themes.js"></script>
    <script src="final-verification.js"></script>
</body>
</html>
```

## Next Steps
1. Switch to Code mode to implement these changes
2. Verify the file is properly formatted and valid HTML
3. Test the website to ensure everything works correctly