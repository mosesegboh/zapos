import useItems from "../composables/item";
import { onMounted, reactive } from "vue";

const { items,
    item,
    getItems,
    response,
    updateResponse,
    getItem,
    destroyItem,
    errors,
    storeItem,
    updateItem
} = useItems()

export default {
    setup() {
        const form = reactive({
            'id': '',
            'name': '',
            'is_purchased': '',
            'created_by': document.querySelector("meta[name='user-id']").getAttribute('content'),
            'purchased_by': document.querySelector("meta[name='user-id']").getAttribute('content'),
        })


        onMounted(getItems)

        const saveItem = async () => {
            form.is_purchased = form.is_purchased == '' ? 0 : 1

            if(form.is_purchased == ''){
                form.purchased_by = process.env.NOT_AVAILABLE
            }

            await storeItem({...form});

            if(  response.value.status == 200 ) {
                $('#exampleModal').hide();
                $('.modal-backdrop').hide();
            }
            getItems();
        }

        const itemUpdate = async (id) => {
            await updateItem(id);

            if(  updateResponse.value.status == 200 ) {
                $('#exampleModalEdit').hide();
                $('.modal-backdrop').hide();
            }
            getItems();
        }

        const deleteItem = async (id) => {
            if (!window.confirm('Are you sure?')) {
                return
            }
            await destroyItem(id);
            await getItems();
        }

        return {
            form,
            errors,
            saveItem,
            items,
            deleteItem,
            item,
            updateItem,
            getItem,
            itemUpdate,
            response,
            updateResponse,
        }
    }
}
