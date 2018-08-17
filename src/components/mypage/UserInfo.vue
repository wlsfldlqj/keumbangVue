<template>
  <div class="container">
    <div class="jumbotron bg-white">
        <h2 title="card-title text-warning">마이페이지 </h2>
        <p class="text-right"><router-link to="/login">Back</router-link></p>
        <hr class="my-4">
        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  프로필
                </button>
              </h5>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
                <user-profile/>
              </div>
              <!-- <div class="card-footer">수정하기</div> -->
            </div>
          </div>
          <div class="card bg-light">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  멤버십
                </button>
              </h5>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">
                <membership/>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  서비스 이용 정보
                </button>
              </h5>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div class="card-body">
                <service/>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  접속 이력
                </button>
              </h5>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div class="card-body">
                <user-logs/>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
</template>
<script>
import UserProfile from '@/components/mypage/components/Profile'
import EditUserProfile from '@/components/mypage/components/ProfileEdit'
import Membership from '@/components/mypage/components/Membership'
import Service from '@/components/mypage/components/Service'
import UserLogs from '@/components/mypage/components/History'
export default {
  components: { UserProfile, EditUserProfile, Membership, Service, UserLogs }
}
</script>
