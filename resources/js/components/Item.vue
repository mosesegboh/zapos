<template>
    <div class="d-flex justify-content-between">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" title="Add an item">
            <BIconFilePlusFill />
        </button>
    </div>

    <!--Add Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="saveItem">
                    <div class="modal-body">
                        <div v-if="errors">
                            <div v-for="(v, k) in errors" :key="k" class="alert alert-danger">
                                <p v-for="error in v" :key="error" class="text-sm">
                                    {{ error }}
                                </p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Item Name</label>
                            <input type="text" class="form-control" id="name"  name="name" placeholder="Item Name" v-model="form.name">
                        </div>
                        <div class="form-check mt-3">
                            <input type="checkbox" class="form-check-input" id="is_purchased" name="is_purchased" v-model="form.is_purchased">
                            <label class="form-check-label" for="is_purchased">Has This item being purchased?</label>
                        </div>
                        <input type="hidden"  name="created_by" v-model="form.created_by">
                        <input type="hidden"  name="purchased_by" v-model="form.purchased_by">
                    </div>

                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </form>

            </div>
        </div>
    </div>

    <!--    Edit Modal-->
    <div class="modal fade" id="exampleModalEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="itemUpdate(item.id)">
                    <div class="modal-body">
                        <div v-if="errors">
                            <div v-for="(v, k) in errors" :key="k" class="alert alert-danger">
                                <p v-for="error in v" :key="error" class="text-sm">
                                    {{ error }}
                                </p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Item Name</label>
                            <input type="text" class="form-control" id="name"  name="name" placeholder="Item Name" v-model="item.name">
                        </div>
                        <div class="form-check mt-3">
                            <input type="checkbox" class="form-check-input" id="is_purchased" name="is_purchased" value="purchased" v-model="item.is_purchased" :checked="item.is_purchased">
                            <label class="form-check-label" for="is_purchased">Has This item being purchased?</label>
                        </div>
                        <input type="hidden"  name="created_by" v-model="item.created_by">
                        <input type="hidden"  name="purchased_by" v-model="item.purchased_by">
                    </div>

                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Update</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </form>

            </div>
        </div>
    </div>

    <!--    Table-->
    <table class="table table-striped">
        <thead>
        <tr>
            <th scope="col">#Item ID</th>
            <th scope="col">Item Name</th>
            <th scope="col">Purchased Status</th>
            <th scope="col">Added By</th>
            <th scope="col">Purchased/Not By</th>
            <th scope="col">Edit Item</th>
            <th scope="col">Delete Item</th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in items"
            :key="item.id"
        >
            <th scope="row">#{{ item.id }}</th>
            <td :style="[item.is_purchased == 1 ? { 'text-decoration': 'line-through' } : null]">{{ item.name }}</td>
            <td>{{ item.is_purchased == 1 ? "Purchased" : "Not Purchased" }}</td>
            <td>{{item.created_by.name}}</td>
            <td>{{item.purchased_by.name}}</td>
            <td>
                <button
                    @click="getItem(item.id)"
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalEdit"
                    title="Edit an item"
                >
                    <BIconPencilSquare/>
                </button>
            </td>
            <td>
                <button @click="deleteItem(item.id)" type="button" class="btn btn-primary" title="Delete an item">
                    <BIconTrash/>
                </button>
            </td>
        </tr>
        </tbody>
    </table>

</template>
<script src="../scripts/script.js"></script>

