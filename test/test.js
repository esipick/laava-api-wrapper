const LaavaAPI = require('../src/LaavaAPI');

const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const laavaAPI = new LaavaAPI(apiKey);

async function testLaavaAPI() {
  try {
    // Test getting collections
    const collections = await laavaAPI.getCollections();
    console.log('Collections:', collections);

    // Test creating a collection
    const newCollection = { name: 'New Collection', description: 'A new collection' }; // Adjust fields as necessary
    const createdCollection = await laavaAPI.createCollection(newCollection);
    console.log('Created Collection:', createdCollection);

    // Test updating a collection
    const collectionId = createdCollection.id; // Use the ID from the created collection
    const updatedCollection = { name: 'Updated Collection Name' }; // Adjust fields as necessary
    const updatedResult = await laavaAPI.updateCollection(collectionId, updatedCollection);
    console.log('Updated Collection:', updatedResult);

    // Test deleting a collection
    const deleteResult = await laavaAPI.deleteCollection(collectionId);
    console.log('Deleted Collection:', deleteResult);

    // Test getting tags
    const tags = await laavaAPI.getTags();
    console.log('Tags:', tags);

    // Test creating a tag
    const newTag = { name: 'New Tag', description: 'A new tag' }; // Adjust fields as necessary
    const createdTag = await laavaAPI.createTag(newTag);
    console.log('Created Tag:', createdTag);

    // Test updating a tag
    const tagId = createdTag.id; // Use the ID from the created tag
    const updatedTag = { name: 'Updated Tag Name' }; // Adjust fields as necessary
    const updatedTagResult = await laavaAPI.updateTag(tagId, updatedTag);
    console.log('Updated Tag:', updatedTagResult);

    // Test deleting a tag
    const deleteTagResult = await laavaAPI.deleteTag(tagId);
    console.log('Deleted Tag:', deleteTagResult);

    // Test getting metadata
    const metadata = await laavaAPI.getMetadata();
    console.log('Metadata:', metadata);

    // Test creating metadata
    const newMetadata = { key: 'New Key', value: 'New Value' }; // Adjust fields as necessary
    const createdMetadata = await laavaAPI.createMetadata(newMetadata);
    console.log('Created Metadata:', createdMetadata);

    // Test updating metadata
    const metadataId = createdMetadata.id; // Use the ID from the created metadata
    const updatedMetadata = { key: 'Updated Key', value: 'Updated Value' }; // Adjust fields as necessary
    const updatedMetadataResult = await laavaAPI.updateMetadata(metadataId, updatedMetadata);
    console.log('Updated Metadata:', updatedMetadataResult);

    // Test deleting metadata
    const deleteMetadataResult = await laavaAPI.deleteMetadata(metadataId);
    console.log('Deleted Metadata:', deleteMetadataResult);

  } catch (error) {
    console.error('Error in API test:', error);
  }
}

testLaavaAPI();
