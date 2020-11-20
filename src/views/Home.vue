<template>
	<div class="home">
		<header class="home-header">
			<div class="home-logo"></div>
			<div class="home-user">
				<el-dropdown placement="bottom">
					<span class="el-dropdown-link">
						<span class="home-user-img"></span>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>个人中心</el-dropdown-item>
						<el-dropdown-item divided>修改密码</el-dropdown-item>
						<el-dropdown-item divided>
							<span @click="loginOut">退出登录</span>
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<div class="home-menu">
				<el-menu
					:default-active="activeIndex"
					class="el-menu-demo"
					mode="horizontal"
				>
					<el-menu-item index="1">
						<router-link to="/" tag="span">首页</router-link>
					</el-menu-item>
					<el-menu-item index="2">
						<router-link to="/announcement" tag="span">通告中心</router-link>
					</el-menu-item>
					<el-menu-item index="3">
						<router-link to="/data" tag="span">论文资料</router-link>
					</el-menu-item>
					<el-menu-item index="4">
						<router-link to="/help" tag="span">帮助</router-link>
					</el-menu-item>
				</el-menu>
			</div>
		</header>
		<div class="home-content">
			<router-view />
		</div>
		<footer class="home-footer">模仿@郑州大学远程教育学院</footer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: '1',
		};
	},

	methods: {
		loginOut() {
			localStorage.clear();
			this.$router.push('/login');
		},
	},
};
</script>

<style lang="scss">
	.home {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		.home-header {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 84px;

			.home-logo {
				float: left;
				height: 84px;
				width: 335px;
				margin-left: 150px;
				background: url(../image/page/logo.png) no-repeat left center;
			}

			.home-menu {
				float: right;
				height: 60px;
				padding-top: 12px;
				margin-right: 30px;

				.el-menu-demo {
					border-bottom: solid 1px transparent;
				}
			}

			.home-user {
				float: right;
				width: 50px;
				height: 60px;
				padding-top: 12px;
				margin-right: 150px;
				text-align: center;

				.home-user-img {
					display: inline-block;
					width: 50px;
					height: 50px;
					border-radius: 50%;
					background: url(../image/page/user.jpg) no-repeat center;
					background-size: 100%;
				}
			}
		}

		.home-content {
			position: absolute;
			top: 84px;
			bottom: 60px;
			left: 0;
			right: 0;
			overflow: auto;
			background: url(../image/page/bg.jpg) no-repeat center;

			&::-webkit-scrollbar {
				width: 3px;
			}
			&::-webkit-scrollbar-thumb {
				background: #d8d8d8;
				border-radius: 10px;
			}
			&::-webkit-scrollbar-track-piece {
				background: transparent;
			}
		}

		.home-footer {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 60px;
			background: #343434;
			text-align: center;
			font: 14px/60px "微软雅黑";
			color: #fff;
		}
	}
</style>