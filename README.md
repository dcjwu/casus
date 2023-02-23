To run development server:

```bash
hugo server -D
```

### To turn off service(s):
1. Go to **layouts/index.html**
2. Find a preferred service, for example Labour Law. It would look like this:
```html
<div data-click="labour" class="services__list-item">
    <img src="/images/services/labourlaw.png" alt="">
    <p>{{ i18n "labour" }}</p>
</div>
```
3. Comment it out (<!-- ... -->), so it looks like this:
```html
<!--
<div data-click="labour" class="services__list-item">
  <img src="/images/services/labourlaw.png" alt="">
  <p>{{ i18n "labour" }}</p>
</div>
-->
```
