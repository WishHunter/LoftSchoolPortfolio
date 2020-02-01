<template lang="pug">
	header.header
		.container
			.flex
				.photo-block
					img.photo(:src='photo')
				p.name {{ name }}
				p.desc Панель администрирования
				a.link_exit(href="#") Выйти
</template>

<script>
export default {
	props: {
		name: String,
		photo: String
	}
}
</script>

<style lang="postcss" scoped>
	.header {
		color: #fff;
		padding: 16px 0;
		background-image: linear-gradient( 90deg, rgb(62,62,89) 0%, rgb(69,69,115) 100%);
	}
	.flex {
		display: flex;
		align-items: center;
	}
	.photo-block {
		position: relative;
		width: 46px;
		height: 46px;
		border-radius: 100%;
		overflow: hidden;
	}
	.photo {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		max-height: 100%;
	}
	.name {
		font-size: 18px;
		font-weight: 600;
		color: #fff;
		margin-left: 20px;
	}
	.desc {
		font-size: 14px;
		opacity: .5;
		margin-left: 28px;
	}
	.link_exit {
		position: relative;
		margin-left: auto;
		color: rgba(#fff, .7);

		&:after {
			content: '';
			position: absolute;
			top: 100%;
			left: 0;
			width: 0;
			height: 1px;
			background-color: rgba(#fff, .7);
			transition: width .2s ease-out;
		}

		&:hover:after {
			width: 100%;
		}
	}
</style>
