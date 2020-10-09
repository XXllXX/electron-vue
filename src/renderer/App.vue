<template>
  <div id="app">
    <div class="win-head">
      <div class="win-title">APP</div>
      <div class="win_button">
        <div class="btn_minimize"></div>
        <div class="btn_maximize"></div>
        <div class="btn_close"></div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
body {
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  border-radius: 8px;
  background-color: width;
}
.win-head {
  height: 30px;
  width: 100vw;
  display: flex;
  flex-wrap: row;
  -webkit-app-region: drag;
  background-color: #2c3e50;
  cursor: move;

  .win-title {
    flex: 1 1 auto;
  }

  .win_button {
    flex: 0 1 138px;
    justify-content: flex-end;
    div {
      width: 46px;
      height: 30px;
      -webkit-app-region: no-drag;
      display: inline-flex;
      position: relative;
      cursor: pointer;
    }

    .btn_close {
      // background: url('~@/assets/images/closepng.png') no-repeat center top;
      background-size: 100%;
      cursor: pointer;
    }

    .btn_minimize:hover,
    .btn_maximize:hover {
      background-color: #d0d2d5;
    }

    .btn_minimize {
      &:hover {
        &::before {
          background-color: #000000;
        }
        &::after {
          background-color: #000000;
        }
      }
      &::before {
        content: '';
        width: 11px;
        height: 1px;
        background-color: #8b8d8f;
        position: absolute;
        top: 14px;
        left: 18px;
      }
    }

    .btn_maximize {
      &:hover {
        &::before {
          border: 1px #000000 solid;
        }
        &::after {
          border: 1px #000000 solid;
        }
      }
      &::before {
        content: '';
        width: 7px;
        height: 7px;
        background-color: transparent;
        border: 1px #8b8d8f solid;
        position: absolute;
        top: 10px;
        left: 18px;
      }
    }

    .btn_close {
      &:hover {
        background-color: #e81123;
        &::before {
          background: linear-gradient(
            to top right,
            transparent 0%,
            transparent calc(50% - 1px),
            #ffffff 50%,
            transparent calc(50% + 1px),
            transparent 100%
          );
        }
        &::after {
          background: linear-gradient(
            to bottom right,
            transparent 0%,
            transparent calc(50% - 1px),
            #ffffff 50%,
            transparent calc(50% + 1px),
            transparent 100%
          );
        }
      }
      &::before {
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        top: 9px;
        left: 18px;
        background: linear-gradient(
          to top right,
          transparent 0%,
          transparent calc(50% - 1px),
          #8b8d8f 50%,
          transparent calc(50% + 1px),
          transparent 100%
        );
      }
      &::after {
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        top: 9px;
        left: 18px;
        background: linear-gradient(
          to bottom right,
          transparent 0%,
          transparent calc(50% - 1px),
          #8b8d8f 50%,
          transparent calc(50% + 1px),
          transparent 100%
        );
      }
    }
  }
}
</style>
