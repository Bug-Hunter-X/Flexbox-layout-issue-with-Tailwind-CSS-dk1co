```javascript
// MyComponentSolution.jsx
import React from 'react';

export default function MyComponent() {
  return (
    <div className="bg-gray-200 p-4 flex">
      <div className="w-1/2 bg-red-500 flex-grow">
        This is the first half.
      </div>
      <div className="w-1/2 bg-blue-500 flex-grow">
        This is the second half.
      </div>
    </div>
  );
}
```