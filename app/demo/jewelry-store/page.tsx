import type { Metadata } from "next"
import JewelryStoreDemo from "@/components/jewelry-store-demo"

export const metadata: Metadata = {
  title: "Jewelry Store Manager - Demo | Nhut Anh Portfolio",
  description:
    "Demo và giới thiệu chi tiết về hệ thống quản lý cửa hàng trang sức - Đồ án tốt nghiệp của Nguyen Hoang Nhut Anh",
}

export default function JewelryStoreDemoPage() {
  return <JewelryStoreDemo />
}
