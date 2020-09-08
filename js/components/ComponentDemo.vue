<template>
    <button>
        Change {{ count }}
    </button>
</template>
<script>
export default {
    name: ComponentDemo,
    data: () => {
        return {
            count : 0
        }
    },
}
</script>