<template>
    <div class="reply">
        <div class="user-info">
            <el-input v-model="form.name" placeholder="昵称(必须✔️)" />
            <el-input style="margin: 0 10px" v-model="form.email" placeholder="邮箱(必须✔️)" />
            <el-input v-model="form.url" placeholder="网站(选填)" />
        </div>
        <div class="content">
            <el-input
                type="textarea"
                :autosize="{ minRows: 6 }"
                placeholder="你有什么想对我说的..."
                v-model="form.content" />
        </div>
        <div class="buttom-btn">
            <el-button class="submit-btn" @click="submit">COMMIT</el-button>
            <el-button v-if="this.pid" class="cancel-btn" @click="$emit('cancel')">CANCEL</el-button>
        </div>
    </div>
</template>

<script>
import {Input} from 'element-ui';

export default {
    components: {
        [Input.name]: Input,
    },
    data() {
        return {
            loading: false,
            form: {
                name: '',
                email: '',
                url: '',
                content: this.reply_to ? this.reply_to + '  ' : '',
                article_id: Number(this.$route.params.id) > 0 ? Number(this.$route.params.id) : this.article_id,
                pid: this.pid || 0,
                ppid: this.ppid || 0
            },
		};
    },
    props: ['reply_to', 'pid', 'ppid', 'article_id'],
    methods: {
        submit() {
            this.loading = true;
            if (!this.form.name) {
                this.$message.error('昵称必填哦~');
                return;
            }
            if (!this.form.email) {
                this.$message.error('邮箱必填哦~');
                return;
            }
            if (!this.form.content) {
                this.$message.error('你难道没什么想说的吗~');
                return;
            }
            this.$axios.post('comments', this.form).then((res) => {
                // this.$message.success('发送成功');
            }).finally(() => {
                this.loading = false;
				this.$emit('cancel')
				this.$emit('refresh')
            });
        }
    },
};
</script>
<style lang="scss" scoped>
.reply {
    margin-top: 15px;
    .user-info {
        display: flex;
        justify-content: center;
    }
    .content {
        margin-top: 10px;
    }
    .buttom-btn {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
}
</style>

