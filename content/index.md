---
seo:
  title: EFL Leasing – SDK & Ecommerce Integrations
  description: Integrate leasing and financing into your ecommerce store with EFL Leasing SDK and plugins for PrestaShop, WordPress, and more.
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
reverse: false
---
#top
:hero-background

#title
[EFL Leasing]{.text-primary} – SDK & Ecommerce Plugins

#description
Integrate leasing and financing into your online store. Use our SDK for custom integrations or choose a ready-made plugin for your ecommerce platform.

#links
  :::u-button
  ---
  to: /docs
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  to: /sdk
  color: neutral
  variant: outline
  size: xl
  icon: i-lucide-package
  ---
  SDK Documentation
  :::

#default
  :::prose-pre
  ---
  code: |
    public function __invoke(): void
    {
        $token = $this->efl->getAuthToken($this->partnerId);
        $positiveUrl = 'https://shop.example.com/efl/return/success';
        $negativeUrl = 'https://shop.example.com/efl/return/failure';

        $redirectUrl = $this->efl->startProcess($positiveUrl, $negativeUrl, $token);
        header('Location: ' . $redirectUrl, true, 302);
        exit;
    }
  filename: StartLeasingController.php
  ---

  ```php [StartLeasingController.php]
  public function __invoke(): void
  {
      $token = $this->efl->getAuthToken($this->partnerId);
      $positiveUrl = 'https://shop.example.com/efl/return/success';
      $negativeUrl = 'https://shop.example.com/efl/return/failure';

      $redirectUrl = $this->efl->startProcess($positiveUrl, $negativeUrl, $token);
      header('Location: ' . $redirectUrl, true, 302);
      exit;
  }
  ```
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
What we offer

#features
  :::u-page-feature
  ---
  icon: i-lucide-package
  ---
  #title
  SDK

  #description
  PHP SDK for custom integrations. Full API reference, authentication, and identity verification flows.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shopping-cart
  ---
  #title
  Ecommerce Plugins

  #description
  Ready-made plugins for popular platforms. Add leasing as a payment option in minutes.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-book-open
  ---
  #title
  Documentation

  #description
  Guides, API reference, and examples. Everything you need to integrate EFL Leasing into your project.
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Platform support

#features
  :::u-page-feature
  ---
  icon: i-simple-icons-prestashop
  ---
  #title
  PrestaShop

  #description
  Native PrestaShop module for leasing integration. Coming soon.
  :::

  :::u-page-feature
  ---
  icon: i-simple-icons-wordpress
  ---
  #title
  WordPress / WooCommerce

  #description
  WordPress plugin for WooCommerce stores. Coming soon.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-code
  ---
  #title
  Custom Integration

  #description
  Use our SDK to build integrations for any platform or custom ecommerce solution.
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Browse documentation
      to: '/docs'
      trailingIcon: i-lucide-arrow-right
    - label: SDK API Reference
      to: '/sdk'
      variant: subtle
      icon: i-lucide-package
  title: Ready to integrate?
  description: Explore our documentation and SDK to add leasing to your ecommerce store.
  class: dark:bg-neutral-950
  ---

  :stars-bg
  :::
::
