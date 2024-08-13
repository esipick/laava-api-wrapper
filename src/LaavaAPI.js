const axios = require('axios');

class LaavaAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.laava.id'; // Replace with the actual base URL if different
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
    });
  }

  // Collections methods
  async getCollections() {
    try {
      const response = await this.client.get('/collections');
      return response.data;
    } catch (error) {
      console.error('Error fetching collections:', error);
      throw error;
    }
  }

  async getCollectionById(collectionId) {
    try {
      const response = await this.client.get(`/collections/${collectionId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching collection ${collectionId}:`, error);
      throw error;
    }
  }

  async createCollection(data) {
    try {
      const response = await this.client.post('/collections', data);
      return response.data;
    } catch (error) {
      console.error('Error creating collection:', error);
      throw error;
    }
  }

  async updateCollection(collectionId, data) {
    try {
      const response = await this.client.put(`/collections/${collectionId}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating collection ${collectionId}:`, error);
      throw error;
    }
  }

  async deleteCollection(collectionId) {
    try {
      const response = await this.client.delete(`/collections/${collectionId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting collection ${collectionId}:`, error);
      throw error;
    }
  }

  // Tags methods
  async getTags() {
    try {
      const response = await this.client.get('/tags');
      return response.data;
    } catch (error) {
      console.error('Error fetching tags:', error);
      throw error;
    }
  }

  async getTagById(tagId) {
    try {
      const response = await this.client.get(`/tags/${tagId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching tag ${tagId}:`, error);
      throw error;
    }
  }

  async createTag(data) {
    try {
      const response = await this.client.post('/tags', data);
      return response.data;
    } catch (error) {
      console.error('Error creating tag:', error);
      throw error;
    }
  }

  async updateTag(tagId, data) {
    try {
      const response = await this.client.put(`/tags/${tagId}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating tag ${tagId}:`, error);
      throw error;
    }
  }

  async deleteTag(tagId) {
    try {
      const response = await this.client.delete(`/tags/${tagId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting tag ${tagId}:`, error);
      throw error;
    }
  }

  // Metadata methods
  async getMetadata() {
    try {
      const response = await this.client.get('/metadata');
      return response.data;
    } catch (error) {
      console.error('Error fetching metadata:', error);
      throw error;
    }
  }

  async getMetadataById(metadataId) {
    try {
      const response = await this.client.get(`/metadata/${metadataId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching metadata ${metadataId}:`, error);
      throw error;
    }
  }

  async createMetadata(data) {
    try {
      const response = await this.client.post('/metadata', data);
      return response.data;
    } catch (error) {
      console.error('Error creating metadata:', error);
      throw error;
    }
  }

  async updateMetadata(metadataId, data) {
    try {
      const response = await this.client.put(`/metadata/${metadataId}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating metadata ${metadataId}:`, error);
      throw error;
    }
  }

  async deleteMetadata(metadataId) {
    try {
      const response = await this.client.delete(`/metadata/${metadataId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting metadata ${metadataId}:`, error);
      throw error;
    }
  }
}

module.exports = LaavaAPI;
