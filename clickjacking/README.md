# Clickjacking Demonstration

โปรเจคนี้แสดงการทำงานของ Clickjacking โดยมี 2 แอปพลิเคชัน:
- **bank-target**: เว็บไซต์ธนาคารเป้าหมาย (Target)
- **hacker-web**: เว็บไซต์ผู้โจมตี (Attacker)

## 🚀 Quick Start

### 1. ติดตั้ง Dependencies ทั้งหมด

```bash
pnpm install
```

คำสั่งนี้จะติดตั้ง dependencies ของทั้ง 3 โปรเจค (root + bank-target + hacker-web) แบบ workspace โดยอัตโนมัติ

### 2. รันทั้ง 2 โปรเจคพร้อมกัน

```bash
pnpm dev
```

คำสั่งนี้จะรัน:
- **bank-target** บน http://localhost:5173
- **hacker-web** บน http://localhost:5174

## 📋 คำสั่งที่มี

| คำสั่ง | คำอธิบาย |
|--------|----------|
| `pnpm install` | ติดตั้ง dependencies ทั้งหมด (workspace) |
| `pnpm dev` | รัน dev server ทั้ง 2 โปรเจคพร้อมกัน |
| `pnpm dev:bank` | รันเฉพาะ bank-target |
| `pnpm dev:hacker` | รันเฉพาะ hacker-web |
| `pnpm build` | Build ทั้ง 2 โปรเจค |
| `pnpm build:bank` | Build เฉพาะ bank-target |
| `pnpm build:hacker` | Build เฉพาะ hacker-web |
| `pnpm clean` | ลบ node_modules และ dist ทั้งหมด |

## 🎯 วิธีใช้งาน

1. ติดตั้ง dependencies:
   ```bash
   npm run install:all
   ```

2. รัน dev server:
   ```bash
   npm run dev
   ```

3. เปิดเบราว์เซอร์:
   - Bank Target: http://localhost:5173
   - Hacker Web: http://localhost:5174

## 🛠️ โครงสร้างโปรเจค

```
clickjacking/
├── bank-target/       # เว็บไซต์ธนาคารเป้าหมาย
├── hacker-web/        # เว็บไซต์ผู้โจมตี
├── package.json       # Root package.json (จัดการทั้ง 2 โปรเจค)
└── README.md          # คู่มือการใช้งาน
```

## 📦 Technologies

- **React 19** - UI Library
- **Vite** - Build Tool & Dev Server
- **TypeScript** - Type Safety
- **Concurrently** - Run Multiple Commands

## 🔧 Requirements

- Node.js >= 18
- npm >= 9
