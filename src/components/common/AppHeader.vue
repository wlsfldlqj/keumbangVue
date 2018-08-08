<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand" href="#">금방</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<a class="nav-link" href="#">About 금방 <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">시세</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">고객센터</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">로그인</a>
				</li>
				<li>
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">이체/결제</button>
				</li>
			</ul>
		</div>
	</nav>
</template>
<script>
export default {
	name:'AppHeader'
}
</script>
