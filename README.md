Here's a more detailed `README.md` that covers all aspects of the `Laava API Wrapper` package:

---

# Laava API Wrapper

[![npm version](https://badge.fury.io/js/laava-api-wrapper.svg)](https://badge.fury.io/js/laava-api-wrapper)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Laava API Wrapper is a Node.js package that provides a convenient interface for interacting with the Laava API. It simplifies the process of managing collections, tags, and metadata through intuitive methods and comprehensive error handling.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Initialization](#initialization)
  - [Collections](#collections)
  - [Tags](#tags)
  - [Metadata](#metadata)
- [API Reference](#api-reference)
  - [Collections Methods](#collections-methods)
  - [Tags Methods](#tags-methods)
  - [Metadata Methods](#metadata-methods)
- [Error Handling](#error-handling)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Collections Management**: Easily create, retrieve, update, and delete collections.
- **Tagging System**: Manage tags associated with your resources, allowing for better organization.
- **Metadata Handling**: Store and retrieve metadata efficiently for various resources.
- **Promise-based**: Utilizes promises for asynchronous operations, making it easy to integrate into modern Node.js applications.
- **Error Handling**: Comprehensive error handling to help you manage API errors gracefully.

## Installation

To install the package, use npm:

```bash
npm install laava-api-wrapper
```

## Usage

### Initialization

To start using the Laava API Wrapper, you need to instantiate the `LaavaAPI` class with your API key.

```javascript
const LaavaAPI = require('laava-api-wrapper');

const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const laavaAPI = new LaavaAPI(apiKey);
```

### Collections

Manage collections with the following methods:

```javascript
// Fetch all collections
const collections = await laavaAPI.getCollections();

// Fetch a collection by ID
const collection = await laavaAPI.getCollectionById('collectionId');

// Create a new collection
const newCollection = { name: 'New Collection', description: 'Description' };
const createdCollection = await laavaAPI.createCollection(newCollection);

// Update an existing collection
const updatedData = { name: 'Updated Collection' };
const updatedCollection = await laavaAPI.updateCollection('collectionId', updatedData);

// Delete a collection
await laavaAPI.deleteCollection('collectionId');
```

### Tags

Manage tags with the following methods:

```javascript
// Fetch all tags
const tags = await laavaAPI.getTags();

// Fetch a tag by ID
const tag = await laavaAPI.getTagById('tagId');

// Create a new tag
const newTag = { name: 'New Tag' };
const createdTag = await laavaAPI.createTag(newTag);

// Update an existing tag
const updatedTagData = { name: 'Updated Tag' };
const updatedTag = await laavaAPI.updateTag('tagId', updatedTagData);

// Delete a tag
await laavaAPI.deleteTag('tagId');
```

### Metadata

Manage metadata with the following methods:

```javascript
// Fetch all metadata
const metadata = await laavaAPI.getMetadata();

// Fetch metadata by ID
const singleMetadata = await laavaAPI.getMetadataById('metadataId');

// Create new metadata
const newMetadata = { key: 'exampleKey', value: 'exampleValue' };
const createdMetadata = await laavaAPI.createMetadata(newMetadata);

// Update existing metadata
const updatedMetadataData = { value: 'updatedValue' };
const updatedMetadata = await laavaAPI.updateMetadata('metadataId', updatedMetadataData);

// Delete metadata
await laavaAPI.deleteMetadata('metadataId');
```

## API Reference

### Collections Methods

- **`getCollections()`**: Retrieves all collections.
- **`getCollectionById(collectionId)`**: Retrieves a specific collection by its ID.
- **`createCollection(data)`**: Creates a new collection with the provided data.
- **`updateCollection(collectionId, data)`**: Updates an existing collection with new data.
- **`deleteCollection(collectionId)`**: Deletes a collection by its ID.

### Tags Methods

- **`getTags()`**: Retrieves all tags.
- **`getTagById(tagId)`**: Retrieves a specific tag by its ID.
- **`createTag(data)`**: Creates a new tag with the provided data.
- **`updateTag(tagId, data)`**: Updates an existing tag with new data.
- **`deleteTag(tagId)`**: Deletes a tag by its ID.

### Metadata Methods

- **`getMetadata()`**: Retrieves all metadata.
- **`getMetadataById(metadataId)`**: Retrieves specific metadata by its ID.
- **`createMetadata(data)`**: Creates new metadata with the provided data.
- **`updateMetadata(metadataId, data)`**: Updates existing metadata with new data.
- **`deleteMetadata(metadataId)`**: Deletes metadata by its ID.

## Error Handling

The Laava API Wrapper provides comprehensive error handling. All methods return a promise, which will reject if an error occurs during the API call. Errors can be caught using `.catch()` or within a `try...catch` block.

```javascript
try {
  const collections = await laavaAPI.getCollections();
} catch (error) {
  console.error('An error occurred:', error.message);
}
```

Errors are returned as instances of the `Error` class, with additional properties such as `statusCode` and `response` where applicable.

## Examples

Here are some examples of how you might use the Laava API Wrapper in different scenarios:

- **Fetching and Logging All Collections**:
  ```javascript
  (async () => {
    const collections = await laavaAPI.getCollections();
    console.log('Collections:', collections);
  })();
  ```

- **Creating and Updating a Tag**:
  ```javascript
  (async () => {
    const newTag = { name: 'Important Tag' };
    const createdTag = await laavaAPI.createTag(newTag);
    console.log('Created Tag:', createdTag);

    const updatedTag = await laavaAPI.updateTag(createdTag.id, { name: 'Updated Tag' });
    console.log('Updated Tag:', updatedTag);
  })();
  ```

- **Handling Metadata**:
  ```javascript
  (async () => {
    const metadata = { key: 'color', value: 'blue' };
    const createdMetadata = await laavaAPI.createMetadata(metadata);
    console.log('Created Metadata:', createdMetadata);

    const updatedMetadata = await laavaAPI.updateMetadata(createdMetadata.id, { value: 'red' });
    console.log('Updated Metadata:', updatedMetadata);
  })();
  ```

## Contributing

Contributions are welcome! If you'd like to contribute to the project, follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name.
3. Make your changes and ensure they are well-documented.
4. Submit a pull request with a detailed description of your changes.

Please ensure that your code follows the existing style and conventions of the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

If you have any questions, issues, or suggestions, feel free to reach out:

- **Email**: [ahmad.wali@esipick.com](mailto:ahmad.wali@esipick.com)
- **GitHub**: [ahmadwaliesipick](https://github.com/esipick)
