<template>
  <Card class="p-4">
    <Tabs default-value="account">
      <TabsList>
        <TabsTrigger
          value="account"
          as="div"
        >
          Account
        </TabsTrigger>
        <TabsTrigger
          value="password"
          as-child
        >
          <div>
            Password
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        c
      </TabsContent>
      <TabsContent value="password">
        a
      </TabsContent>
    </Tabs>
  </Card>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
</script>

<style scoped>

</style>
