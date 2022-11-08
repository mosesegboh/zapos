import {ref} from 'vue';
import axios from 'axios';

export default function useItems() {
    const items = ref([])
    const item = ref([])
    const errors = ref('')
    const response = ref('')
    const updateResponse = ref('')

    const getItems = async () => {
        let response = await axios.get('/api/items')
        items.value = response.data.data;
    }

    const getItem = async (id) => {
        let response = await axios.get('/api/items/' + id)
        item.value = response.data.data
    }

    const storeItem = async (data) => {
        errors.value = ''
        try {
            response.value = await axios.post('/api/items', data)
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateItem = async (id) => {
        errors.value = ''
        item.value.purchased_by = item.value.is_purchased == true ? document.querySelector("meta[name='user-id']").getAttribute('content') : 2;
        item.value.created_by = item.value.created_by.id;
        item.value.is_purchased = item.value.is_purchased == true ? 1 : 0;
        try {
            updateResponse.value = await axios.put('/api/items/' + id, item.value)
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const destroyItem = async (id) => {
        await axios.delete('/api/items/' + id)
    }

    return {
        items,
        item,
        errors,
        getItems,
        getItem,
        updateItem,
        storeItem,
        destroyItem,
        response,
        updateResponse,
    }
}
