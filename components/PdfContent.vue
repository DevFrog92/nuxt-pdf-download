<template>
	<section class="pdf-content">
		<div v-for="(val, key) in 10" :key="key" class="content-wrapper">
			<h1>hello</h1>
			<img src="~/assets/images/zzanggu.png" alt="image" />
			<p class="desc">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias
				deserunt laboriosam perferendis, ullam voluptatum in neque delectus illo
				non consequatur saepe, explicabo harum consectetur voluptas distinctio
				accusantium molestiae omnis, tempore nihil fuga animi repudiandae.
				Asperiores eos totam soluta quia consectetur, obcaecati impedit commodi
				incidunt? Aspernatur veritatis omnis nostrum voluptate similique maxime
				hic esse vero ullam laborum, amet obcaecati voluptatem sunt aliquid
				expedita! Inventore aperiam quo odio accusantium odit assumenda
				laudantium sint optio nesciunt natus sit, et cumque ipsa incidunt, a
				doloremque quos mollitia consequatur itaque. Id impedit soluta dolore
				nobis repudiandae sint provident obcaecati, et cum sed expedita
				consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Eaque molestias deserunt laboriosam perferendis, ullam voluptatum in
				neque delectus illo non consequatur saepe, explicabo harum consectetur
				voluptas distinctio accusantium molestiae omnis, tempore nihil fuga
				animi repudiandae. Asperiores eos totam soluta quia consectetur,
				obcaecati impedit commodi incidunt? Aspernatur veritatis omnis nostrum
				voluptate similique maxime hic esse vero ullam laborum, amet obcaecati
				voluptatem sunt aliquid expedita! Inventore aperiam quo odio accusantium
				odit assumenda laudantium sint optio nesciunt natus sit, et cumque ipsa
				incidunt, a doloremque quos mollitia consequatur itaque. Id impedit
				soluta dolore nobis repudiandae sint provident obcaecati, et cum sed
				expedita consequatur? Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Eaque molestias deserunt laboriosam perferendis, ullam voluptatum
				in neque delectus illo non consequatur saepe, explicabo harum
				consectetur voluptas distinctio accusantium molestiae omnis, tempore
				nihil fuga animi repudiandae. Asperiores eos totam soluta quia
				consectetur, obcaecati impedit commodi incidunt? Aspernatur veritatis
				omnis nostrum voluptate similique maxime hic esse vero ullam laborum,
				amet obcaecati voluptatem sunt aliquid expedita! Inventore aperiam quo
				odio accusantium odit assumenda laudantium sint optio nesciunt natus
				sit, et cumque ipsa incidunt, a doloremque quos mollitia consequatur
				itaque. Id impedit soluta dolore nobis repudiandae sint provident
				obcaecati, et cum sed expedita consequatur? Lorem ipsum dolor sit amet
			</p>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style scoped>
.pdf-content {
	width: 100%;
	background-color: #fff;
	display: flex;
	justify-content: center;
	flex-direction: column;
}

.content-wrapper {
	padding: 1rem;
	background-color: rgba(254, 255, 195, 30%);
	border: 1px solid;
}

.content-wrapper:last-child {
	margin-bottom: 0;
}
</style>
