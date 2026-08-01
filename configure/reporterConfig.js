// Custom reporter configuration
// Example: saving results in JSON

import fs from 'fs';

class CustomReporter {
  onEnd(result) {
    fs.writeFileSync('test-results.json', JSON.stringify(result, null, 2));
  }
}

export default CustomReporter;
