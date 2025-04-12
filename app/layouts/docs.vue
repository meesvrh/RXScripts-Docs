<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");
const fmLibNavigation = ref<ContentNavigationItem[]>([]);

if (navigation && navigation.value) {
  const fmLibIndex = navigation.value.findIndex(
    (item) => item.title === "fmLib"
  );

  if (fmLibIndex !== -1) {
    const fmLibItem = navigation.value[fmLibIndex];
    if (fmLibItem) {
      fmLibNavigation.value = [fmLibItem];
    }

    navigation.value = navigation.value.filter(
      (item) => item.title !== "fmLib"
    );
  }
}
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <UContentNavigation highlight :navigation="navigation" />

          <UContentNavigation
            highlight
            :navigation="fmLibNavigation"
            type="single"
          />
        </UPageAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
