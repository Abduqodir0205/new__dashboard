<template>
  <div class="dashboard-left-content-recentDeals-deal">
    <div class="dashboard-left-content-recentDeals-deal-avatar">
      <img src="../assets/images/png/Avatar.png" alt="avatar" />
    </div>
    <div class="dashboard-left-content-recentDeals-deal-date">
      <span>
        <h2>319 Haul Road</h2>
        <h2>$5750</h2>
      </span>
      <span>
        <p>Glenrock,WY</p>
        <p>Nov 14, 07:00 AM</p>
      </span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.dashboard-left-content-recentDeals-deal {
  display: flex;
  align-items: center;
  gap: 1rem;
  &-avatar {
    border-radius: 25px;
    width: 44px;
    height: 44px;
    img {
      width: inherit;
      height: inherit;
      border-radius: inherit;
    }
  }
  &-date {
    width: 100%;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: space-between;
    gap: 0.2rem;
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0;
    }
    p {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 14px;
      line-height: 193%;
      color: var(--grey-grey-70);
    }
  }
}
</style>
