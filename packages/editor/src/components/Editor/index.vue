<template>
    <canvas class="w-full h-full"  id="editor"></canvas>
</template>

<script name="Editor" lang="ts" setup>
import { Rect,Text } from 'leafer-ui'
import Editor from '@/lib/Editor'

onMounted(() => {
    const editor = new Editor('editor')
    editor.init()
    
    editor.addTree(new Rect({ x: 0, y: 0, fill: '#32cd79', draggable: true }))
    editor.addTree(new Text({
        fill: 'rgb(50,205,121)',
        text: 'Welcome to LeaferJS',
        x: 100, 
        y: 100
    }))
})
</script>