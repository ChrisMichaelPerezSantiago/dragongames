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
<div id="modal1" class="modal">           <div class="modal-content">
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
                <h3><i class="fas fa-dragon"></i>Dragon Games</h3>
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
              </div>
              <div id="main" class="watchlist-list">
                
                <div class="col s12 load" v-if="isLoading">
                  <div class="col s4 offset-s4 spinner">
                </div>
              </div>
              <div v-else id="watchlist" class="col s12 watchlist">
                <div class="col s10 push-s1 m6 l3 movie" v-for="(item, index) in allContent" :key="index">
                   <md-card>
                      <md-card-header>
                        <md-avatar>
                          <img :src="item.img" alt="Avatar">
                        </md-avatar>

                        <div class="md-title">{{item.title}}</div>
                        <div class="md-subhead">{{item.platform}}</div>
                      </md-card-header>

                      <md-card-media>
                        <img  :src="item.img" alt="People">
                      </md-card-media>

                      <md-card-content>
                        {{item.synopsis}}
                      </md-card-content>

                      <md-card-actions>
                        <md-button>Action</md-button>
                        <md-button>Action</md-button>
                      </md-card-actions>
                  </md-card>
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
            </div>
              <div class="text-xs-center">
                <v-pagination
                  class="pagin"
                  v-model="page"
                  :length="videoContent.length"
                  circle
                ></v-pagination>
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
  data(){
    return{
      page: 0,
    }
  },
  created() {
    this.$store.dispatch("getAllContent");
    this.$store.dispatch("getAllVideoContent" , this.page);
  },
  computed: {
    ...mapState(["allContent", "videoContent", "isLoading"])
  },
  mounted() {
    scripts();
  }
};
</script>
