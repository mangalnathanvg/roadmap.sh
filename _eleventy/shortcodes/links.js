const outdent = require('outdent')({ newline: ' ' });

module.exports = {
  Video: function (href, text) {
    return outdent`
      <p class='mb-1 text-md'>
        <a href='${href}' class='text-blue-900 hover:text-blue-600'>
          <span class='bg-purple-200 text-pink-900 text-sm font-semibold mr-1.5 px-2.5 py-1 rounded uppercase relative -top-0.5'>Watch</span> ${text}
        </a>
      </p>
    `;
  },

  Blog: function (href, text) {
    return outdent`
      <p class='mb-1 text-md'>
        <a href='${href}' class='text-blue-900 hover:text-blue-600'>
          <span class='bg-yellow-200 text-yellow-900 text-sm font-semibold mr-1.5 px-2.5 py-1 rounded uppercase relative -top-0.5'>Read</span> ${text}
        </a>
      </p>
    `;
  },

  Course: function (href, text) {
    return outdent`
      <p class='mb-1 text-md'>
        <a href='${href}' class='text-blue-900 hover:text-blue-600'>
          <span class='bg-green-200 text-green-900 text-sm font-semibold mr-1.5 px-2.5 py-1 rounded uppercase relative -top-0.5'>Course</span> ${text}
        </a>
      </p>
    `;
  },

  Official: function (href, text) {
    return outdent`
      <p class='mb-1 text-md'>
        <a href='${href}' class='text-blue-900 hover:text-blue-600'>
          <span class='bg-blue-200 text-blue-900 text-sm font-semibold mr-1.5 px-2.5 py-1 rounded uppercase relative -top-0.5'>Official</span> ${text}
        </a>
      </p>
    `;
  },
};
