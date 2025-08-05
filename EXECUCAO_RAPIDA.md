# 🚀 GUIA RÁPIDO DE EXECUÇÃO

## ⚡ **Execução Rápida (2 minutos)**

### **1️⃣ Backend**
```bash
cd backend
npm install
npx prisma generate
npm run start:dev
```
✅ **Backend rodando em:** http://localhost:3333

### **2️⃣ Frontend** 
```bash
cd frontend  
npm install
npm run dev
```
✅ **Frontend rodando em:** http://localhost:3000

---

## 🎯 **O que você verá:**

- **Cards interativos** com hover expandido
- **Modais independentes** com gradientes
- **Sistema CRUD completo** para pets
- **Busca em tempo real** 
- **Design fiel ao Figma**

---

## 🐛 **Resolução de Problemas**

### **Porta em uso:**
```bash
# Verificar processos na porta
netstat -ano | findstr :3000
netstat -ano | findstr :3333

# Matar processo (Windows)
taskkill /PID [PID_NUMBER] /F
```

### **Erro de dependências:**
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### **Erro de banco:**
```bash
cd backend
npx prisma db push --force-reset
npx prisma generate
```

---

**🎉 Em 2 minutos você terá o projeto funcionando!**
