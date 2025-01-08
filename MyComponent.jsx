```javascript
// MyComponent.jsx
import React from 'react';

export default function MyComponent() {
  return (
    <div className="bg-gray-200 p-4">
      <div className="flex">
        <div className="w-1/2 bg-red-500">
          This is the first half.
        </div>
        <div className="w-1/2 bg-blue-500">
          This is the second half.
        </div>
      </div>
    </div>
  );
}
```