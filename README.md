# Flexbox Layout Issue with Tailwind CSS

This repository demonstrates a common issue encountered when using Tailwind CSS with flexbox layouts. The problem occurs when attempting to divide space equally among flex items, resulting in unexpected overflow or incorrect distribution.

The `MyComponent.jsx` file contains the buggy code, while `MyComponentSolution.jsx` provides a corrected version. The solution involves utilizing proper Tailwind directives and ensuring the parent container has the appropriate settings for flexbox to work correctly.

## Bug

The initial implementation uses `w-1/2` to try to make each div occupy half of the available space, but it does not work as intended. The divs overflow the container causing undesired layout. 

## Solution

The solution involves using `flex-grow` to distribute space equally. By specifying `flex-grow` on both child divs, Tailwind CSS's flexbox implementation ensures that both children occupy equal portions of the available space.