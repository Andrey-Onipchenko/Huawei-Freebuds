<template>
  <div class="test" id="testScroll">
    <div class="test__content">
      <div ref="slide" class="slide">
        <div
          ref="play"
          @click="play($event)"
          class="slide__control slide__play"
        ></div>
        <audio ref="audioOne" preload="auto">
          <source src="../assets/audio/slide_1.mp3" type="audio/mp3" />
        </audio>
        <audio ref="audioTwo" preload="auto">
          <source src="../assets/audio/slide_2.mp3" type="audio/mp3" />
        </audio>
        <audio ref="audioThree" preload="auto">
          <source src="../assets/audio/slide_3.mp3" type="audio/mp3" />
        </audio>
        <audio ref="audioFour" preload="auto">
          <source src="../assets/audio/slide_4.mp3" type="audio/mp3" />
        </audio>
        <audio ref="audioFive" preload="auto">
          <source src="../assets/audio/slide_5.mp3" type="audio/mp3" />
        </audio>
        <audio ref="audioSix" preload="auto">
          <source src="../assets/audio/slide_6.mp3" type="audio/mp3" />
        </audio>
        <audio ref="audioSeven" preload="auto">
          <source src="../assets/audio/slide_7.mp3" type="audio/mp3" />
        </audio>
        <div class="slide__change">
          <p class="slide__question">{{ slide.question }}</p>
          <div class="slide__answer">
            <div class="slide__answer-line">
              <button @click="choiceAnswer($event)" class="slide__answer-btn">
                {{ slide.answerOne }}
              </button>
              <button @click="choiceAnswer($event)" class="slide__answer-btn">
                {{ slide.answerTwo }}
              </button>
            </div>
            <div class="slide__answer-line">
              <button @click="choiceAnswer($event)" class="slide__answer-btn">
                {{ slide.answerThree }}
              </button>
              <button @click="choiceAnswer($event)" class="slide__answer-btn">
                {{ slide.answerFour }}
              </button>
            </div>
            <div class="slide__count">{{ step }}/7</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: 0,
      step: 1,
      audio: null,
      slide: {
        question:
          "Прослухай фрагмент звукового запису звуків міста та спробуй здогадатись, яке звучить саме так, й обери свій варіант із списку.",
        answer: "Так звучить Одеса!",
        answerOne: "Так звучить Київ!",
        answerTwo: "Так звучить Одеса!",
        answerThree: "Так звучить Карпати!",
        answerFour: "Так звучить Харків!",
      },
      slideTwo: {
        question:
          "Добре, а якщо ми запитаємо таке: місто, де можна знайти майже все, а туристів, напевно, навіть більше, ніж місцевих?",
        answer: "Так звучить Львів!",
        answerOne: "Так звучить Полтава!",
        answerTwo: "Так звучить Одеса!",
        answerThree: "Так звучить Львів!",
        answerFour: "Так звучить Харків!",
      },
      slideThree: {
        question:
          "Окей, далі ось таке завдання: це місто, що може пишатись своєю продуктивністю, місто-робітник?",
        answer: "Так звучить Харків!",
        answerOne: "Так звучить Харків!",
        answerTwo: "Так звучить Львів!",
        answerThree: "Так звучить Дніпро!",
        answerFour: "Так звучить Карпати!",
      },
      slideFour: {
        question:
          "Добре, трохи поїдемо подалі від міст, що скажеш про це: місце, де живе одвічний спокій та натхнення? Тут можна відпочити душею та сповнитись гармонією.",
        answer: "Так звучить Карпати!",
        answerOne: "Так звучить Карпати!",
        answerTwo: "Так звучить Полтава!",
        answerThree: "Так звучить Київ!",
        answerFour: "Так звучить Одеса!",
      },
      slideFive: {
        question:
          "А зараз буде складно: це місце з вагомою історичною та навіть містичною спадщиною?",
        answer: "Так звучить Полтава!",
        answerOne: "Так звучить Харків!",
        answerTwo: "Так звучить Дніпро!",
        answerThree: "Так звучить Полтава!",
        answerFour: "Так звучить Одеса!",
      },
      slideSix: {
        question:
          "Окей, ще трошки непростого: місто, де можна майже нескінченно довго гуляти біля річки?",
        answer: "Так звучить Дніпро!",
        answerOne: "Так звучить Полтава!",
        answerTwo: "Так звучить Дніпро!",
        answerThree: "Так звучить Львів!",
        answerFour: "Так звучить Одеса!",
      },
      slideSeven: {
        question: "І останнє питання: місто, по якому впізнають нашу країну?",
        answer: "Так звучить Київ!",
        answerOne: "Так звучить Дніпро!",
        answerTwo: "Так звучить Львів!",
        answerThree: "Так звучить Карпати!",
        answerFour: "Так звучить Київ!",
      },
    };
  },
  mounted() {
    this.audio = this.$refs.audioOne;
  },
  methods: {
    play(event) {
      let btnPlay = event.target.classList;
      switch (this.step) {
        case 2:
          this.audio = this.$refs.audioTwo;
          break;
        case 3:
          this.audio = this.$refs.audioThree;
          break;
        case 4:
          this.audio = this.$refs.audioFour;
          break;
        case 5:
          this.audio = this.$refs.audioFive;
          break;
        case 6:
          this.audio = this.$refs.audioSix;
          break;
        case 7:
          this.audio = this.$refs.audioSeven;
          break;
      }

      if (btnPlay.contains("slide__play")) {
        this.audio.play();
        this.toggleClass("slide__play", "slide__pause");
      } else if (btnPlay.contains("slide__pause")) {
        this.audio.pause();
        this.toggleClass("slide__pause", "slide__play");
      } else if (btnPlay.contains("slide__refresh")) {
        this.audio.play();
        this.toggleClass("slide__refresh", "slide__pause");
      }
      let interval = setInterval(() => {
        if (this.audio.currentTime === this.audio.duration) {
          btnPlay.remove("slide__pause");
          btnPlay.add("slide__refresh");
          clearInterval(interval);
        }
      }, 1000);
    },
    toggleClass(remove, add) {
      let btnPlay = event.target.classList;
      btnPlay.remove(remove);
      btnPlay.add(add);
    },
    choiceAnswer(event) {
      if (this.audio.currentTime) {
        this.audio.pause();
        this.audio.currentTime = 0;
      }
      if (this.$refs.play.classList.contains("slide__pause")) {
        this.$refs.play.classList.remove("slide__pause");
        this.$refs.play.classList.add("slide__play");
      } else if (this.$refs.play.classList.contains("slide__refresh")) {
        this.$refs.play.classList.remove("slide__refresh");
        this.$refs.play.classList.add("slide__play");
      }
      let btn = event.target,
        slide = this.$refs.slide,
        btnsAnswer = document.querySelectorAll(".slide__answer-btn");
      if (btn.textContent === this.slide.answer) {
        btn.classList.add("slide__true");
        this.result += 10;
        console.log(this.result);
      } else {
        btn.classList.add("slide__false");
        btnsAnswer.forEach((item) => {
          if (item.textContent === this.slide.answer) {
            item.classList.add("slide__true");
          }
        });
      }
      setTimeout(() => {
        slide.style.opacity = "0";
        this.nextSlide(slide, btnsAnswer);
      }, 1000);
    },
    nextSlide(slide, btnsAnswer) {
      setTimeout(() => {
        btnsAnswer.forEach((item) => {
          if (item.classList.contains("slide__true")) {
            item.classList.remove("slide__true");
          } else if (item.classList.contains("slide__false")) {
            item.classList.remove("slide__false");
          }
        });
        this.step += 1;
        switch (this.step) {
          case 2:
            this.slide = this.slideTwo;
            break;
          case 3:
            this.slide = this.slideThree;
            break;
          case 4:
            this.slide = this.slideFour;
            break;
          case 5:
            this.slide = this.slideFive;
            break;
          case 6:
            this.slide = this.slideSix;
            break;
          case 7:
            this.slide = this.slideSeven;
            break;
          case 8:
            if (this.result >= 0 && this.result <= 10) {
              this.$router.push("resultOne");
            } else if (this.result >= 20 && this.result <= 30) {
              this.$router.push("resultTwo");
            } else if (this.result >= 40 && this.result <= 50) {
              this.$router.push("resultThree");
            } else if (this.result >= 60 && this.result <= 70) {
              this.$router.push("resultFour");
            }
            break;
        }
        slide.style.opacity = "1";
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.test {
  width: 100%;
  height: 630px;
  background: url("../assets/images/test_bg.png") no-repeat;
  margin-bottom: 150px;
  padding-top: 230px;
  overflow: hidden;
  // @media (max-height: 629px) {
  //   height: 90vh;
  // }
}
.slide {
  width: 100%;
  transition: 1s ease;
  &__control {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    cursor: pointer;
  }
  &__play {
    background: url("../assets/images/play.png");
  }
  &__pause {
    background: url("../assets/images/pause.svg");
  }
  &__refresh {
    background: url("../assets/images/refresh.png");
  }
  &__question {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #fff;
    max-width: 800px;
    margin: 0 auto 55px;
  }
  &__answer {
    max-width: 590px;
    margin: 0 auto;
    &-line {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      &:nth-child(2) {
        margin-bottom: 30px;
      }
    }
    &-btn {
      width: 284px;
      height: 48px;
      padding-left: 35px;
      background: #fff;
      border-radius: 30px;
      font-family: "Huawei Bold", sans-serif;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      display: flex;
      align-items: center;
      position: relative;
      &::before {
        content: "";
        width: 24px;
        height: 30px;
        position: absolute;
        background: url("../assets/images/notes_icon.svg") center no-repeat;
        top: 50%;
        right: 25px;
        transform: translateY(-50%);
      }
    }
  }
  &__true {
    background: #3e8e4a;
    color: #fff;
    // animation-duration: 1s;
    // animation-name: bbb;
  }
  &__false {
    background: red;
    color: #fff;
  }
  &__count {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    font-family: "Huawei Bold", sans-serif;
    color: #fff;
    margin-bottom: 100px;
  }
}
// @keyframes bbb {
//   0% {
//     background: #3e8e4a;
//   }
//   25% {
//     background: #fff;
//   }
//   50% {
//     background: #3e8e4a;
//   }
//   75% {
//     background: #fff;
//   }
//   100% {
//     background: #3e8e4a;
//   }
// }
</style>
