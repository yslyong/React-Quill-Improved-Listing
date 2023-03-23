# React Quill Improved Listing

## What's this?

In this repository contain two fixes for React Quill Listing to make it have a similar feeling with .docx listing.

### What is fixed?
1. Added fixes for sub listing to restarted counting at 1 instate of continuous
2. Added ability to add empty ordering to the listing

<img src="https://user-images.githubusercontent.com/64799412/227168030-ffe9f3a8-cb2e-4f51-a07d-7f55db81de1f.png" />

## Quick Start

Can try the demo here: https://codesandbox.io/s/modest-hertz-0e5yy2

Or can clone and run this repo at your local
```
npm install
npm start
```

## How it work

I will try to explain how the fix work

### Added fixes for sub listing to restarted counting at 1 instate of continuous

To fix the sub listing with continuous listing count on another sub listing. It just need a css fix as stated in this section.

<img src="https://user-images.githubusercontent.com/64799412/227170137-4c338218-9a7f-44ee-8436-d888aceb29bd.png" />

```
//Add this CSS to your project will work
.ql-editor ol {
  counter-reset: unset !important;
}
```

