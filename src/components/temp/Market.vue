<template>
    <div class="container">
        <div class="jumbotron bg-white">
            <h2 class="display-4 text-warning">Market</h2>
            <p class="text-right"><router-link to="/">Back</router-link></p>
            <hr class="my-4">
            <p>금방에서 빠르게 송금하실 수 있습니다.</p>
            <div class="card w-80 border-light ">
                <div class="card-body text-center">
                     <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-action"><router-link to="/about">금 구매</router-link></li>
                        <li class="list-group-item list-group-item-action"><router-link to="/market">금 인출</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    
}
</script>
