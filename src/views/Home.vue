<template>
  <body>
    <div class="video-trailer">
      <div class="close-trailer"><i class="material-icons">close</i></div>
    </div>
    <header>
      <nav>
        <ul class="navbar">
          <li id='search-link' data-activities="search">      
            <i class="material-icons" >search</i>
          </li>
          <li data-activities="airplay">      
            <i class="material-icons" >airplay</i>
          </li>
          <li class="disabled" id="trailer" data-activities="trailer">      
            <i class="material-icons" >play_arrow</i>
          </li>
          <li data-activities="refresh">      
            <i class="material-icons" >refresh</i>          
          </li>
          <li class="disabled" data-activities="list">      
            <i class="material-icons" >list</i>
          </li>
          <li class="disabled" data-activities="favorites">      
            <i class="material-icons" >whatshot</i>
          </li>
          <li id="back" data-activities="back" class="disabled">      
            <i class="material-icons" >arrow_back
          </i>
          </li>
        </ul>
      </nav>
    </header>
    <div class="app">
      <div class="had-container">
        <div class="row">
          <div id="modal1" class="modal">
            <div class="modal-content">
               <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
          </div>
          <div class="col s12 menu-section">
            <div id="search" class="search col s6 offset-s3 valign-wrapper">
            <form>
              <input type="text" placeholder="Search Game ...">
                <button type="submit" name="btn">
                <i class="material-icons">search</i>
                </button>
              </form>
            </div>
            <div class="close"><i class="material-icons">close</i></div>
          </div>

          <div class="col s12 m9 l10 main">
            <div class="main-head col s12">
              <div class="col head-logo">
                <h3 style="color:black"><i class="fas fa-dragon"></i><b style="color: #bf360c;">D</b>ragon <b style="color: #bf360c;">G</b>ames</h3>
              </div>
              <div class="col head-info hide-on-med-and-down">
                <ul class="valign-wrapper">
                  <li>
                    <i class="material-icons">home</i>
                      Home
                  </li>
                    <li>
                      <i class="material-icons">show_chart</i>
                      Trending Topic
                  </li>
                   <li>
                    <i class="material-icons">ondemand_video</i>
                     Videos
                  </li>
                </ul>
              </div>
              <div class="head-config right-align">
                <ul class="valign-wrapper right">
                  <li>
                    <i class="material-icons">sync</i>
                  </li>
                    <li>
                      <i class="material-icons">settings</i>
                  </li>
                   <li>
                    <i class="material-icons">remove_red_eye</i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col s12 movie-view">
              <div class="shadow"></div>

            </div>
            <div class="main-watchlist col s12">
              <div class="watchlist-head">
                <div class="col s3 watchlist-title">
                  <p>Recent News</p>
                </div>
                <div class="col s9 watchtlist-movie-tv right-align">
                  <ul class="valign-wrapper">
                    <li>Gaming News</li>
                    <li>Videos</li>
                  </ul>
                </div>
                  <div class="content-pagin">
                  <paginate
                    class="paginator-container"
                    v-model="contentpage"
                    :page-count="allContent.length"
                    :page-range="3"
                    :margin-pages="2"
                    :click-handler="nextContent"
                    :prev-text="'Prev'"
                    :next-text="'Next'"
                    :container-class="'pagination'"
                    :page-class="'page-item'">
                  </paginate>
               </div>
              </div>
              <div id="main" class="watchlist-list">
                
              <div class="col s12 load" v-if="isLoading">
                <div class="col s4 offset-s4 spinner">
                </div>
              </div>
              <div v-else id="watchlist" class="col s12 watchlist">
              <div class="col s10 push-s1 m6 l3 movie" v-for="(item, index) in allContent" :key="index">
                <img class="images" :src="item.img" alt="item.title">
                  
                    <md-dialog style="color:white;" :md-active.sync="showDialog">
                      <md-dialog-title>{{item.title}}</md-dialog-title>

                      <md-tabs md-dynamic-height>
                        <md-tab md-label="Synopsis">
                          <p>{{item.synopsis}}</p>
                        </md-tab>

                        <md-tab md-label="Platforms">
                          <p>{{item.platform}}</p>
                        </md-tab>

                        <md-tab md-label="Account">
                          <p></p>
                        </md-tab>
                      </md-tabs>

                      <md-dialog-actions>
                        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
                      </md-dialog-actions>
                    </md-dialog>

                    <md-button  class="md-second md-raised" @click="showDialog = true">Content</md-button>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div class="col m3 l2 hide-on-small-only upcoming">
            <div class="col s12 upcoming-head valign-wrapper">
              <h5 class="center"><i class="material-icons">slow_motion_video</i>VIDEOS</h5>
            </div>

            <div class="col s12 upcoming-list">
              <div v-for="(item, index) in videoContent" :key="index">
                  <video  width="310" height="210" :poster="item.img" controls :src="item.src" :title="item.title"></video>
              </div>
               <div class="text-xs-center">
              <div class="videos-pagin">
                <paginate
                  class="paginator-container"
                  v-model="videopage"
                  :page-count="videoContent.length"
                  :page-range="3"
                  :margin-pages="2"
                  :click-handler="nextVideos"
                  :prev-text="'Prev'"
                  :next-text="'Next'"
                  :container-class="'pagination'"
                  :page-class="'page-item'">
                </paginate>
               </div>
              </div>
            </div>
             
          </div>
        </div>
      </div>    
    </div>
  </body>

</template>


<script>
import { scripts } from "../js/index.js";
import { mapState } from "vuex";

export default {
  name: "home",
  data: () =>({
    showDialog: false,
    contentpage: 0,
    videopage: 0,
  }),
  computed: {
    ...mapState(["allContent", "videoContent", "isLoading"])
  },
  created() {
    this.$store.dispatch("getAllContent", this.contentpage);
    this.$store.dispatch("getAllVideoContent", this.videopage); 
  },
  methods:{
    nextContent(){
      this.$store.dispatch("getAllContent", this.contentpage);
    },
    nextVideos(){
      this.$store.dispatch("getAllVideoContent", this.videopage); 
    }
  },
  mounted() {
    scripts();
  },
};
</script>
