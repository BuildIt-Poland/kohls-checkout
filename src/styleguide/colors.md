The Store by BuildIt colour palette aims at providing an organised approach to apply colour to the UI of your apps.

### Accesibility

Follow the AA standards. Make sure the background and text used have a minimal contrast ratio. [More info](https://webaim.org/resources/contrastchecker/)

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 40px;
  margin-bottom: 40px;
}
.box {
  color: white;
  height: 220px;
  position: relative;
}
.box.invert {
  color: #3A3A3A;
}
.main {
  border-radius: 5px;
  height: 120px;
  width: 100%;
  position: absolute;
  padding: 22px;
  z-index: 2;
}
.main-heading {
  font-size: 20px;
  margin-bottom: 25px;
}
.light {
  border-radius: 5px;
  height: 60px;
  position: absolute;
  z-index: 1;
  top: 110px;
  width: 100%;
  padding: 22px;
}
.lighter {
  top: 160px;
  z-index: 0;
}
</style>

```jsx noeditor
<div className="grid">
  <div className="box">
    <div className="main" style={{ backgroundColor: '#00a09f' }}>
      <div className="main-heading">Turquoise</div>
      <span>Turquoise #00A09F</span>
    </div>
    <div className="light" style={{ backgroundColor: '#008484' }}>
      Turquoise Dimmed #008484
    </div>
    <div className="light lighter" style={{ backgroundColor: '#008484' }} />
  </div>
  <div className="box">
    <div className="main" style={{ backgroundColor: '#E0151D' }}>
      <div className="main-heading">Red</div>
      <span>Red #E0151D</span>
    </div>
    <div className="light" style={{ backgroundColor: '#FADCDD' }}>
      Light Red #FADCDD
    </div>
    <div className="light lighter" style={{ backgroundColor: '#FADCDD' }} />
  </div>
  <div className="box">
    <div className="main" style={{ backgroundColor: '#FFBF47' }}>
      <div className="main-heading">Lemon yellow</div>
      <span>Lemon yellow #FFBF47</span>
    </div>
  </div>
  <div className="box">
    <div className="main" style={{ backgroundColor: '#222222' }}>
      <div className="main-heading">Black</div>
      <span>Black #222222</span>
    </div>
    <div className="light" style={{ backgroundColor: '#666666' }}>
      Dark Grey #666666
    </div>
    <div className="light lighter" style={{ backgroundColor: '#b0b0b0' }}>
      Light Grey #B0B0B0
    </div>
  </div>
</div>
```
