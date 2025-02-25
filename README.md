# Repositorio de Programación III 2025A - TypeScript Design Patterns

Este repositorio contiene el código desarrollado para el curso de Programación III, enfocado en el desarrollo backend con TypeScript y patrones de diseño avanzados. El proyecto implementa diversos patrones como Interfaces, Adapters, Factories y otros, demostrando buenas prácticas de programación orientada a objetos.

## 🚀 Características

- **Interfaces TypeScript**: Implementación de contratos para asegurar consistencia en el código
- **Patrones de Diseño**:
  - Adapter: Conecta interfaces incompatibles
  - Factory: Crea objetos sin especificar la clase exacta
  - Singleton: Asegura una única instancia de una clase
  - Repository: Abstrae la capa de datos
- **Estructura Modular**: Organización del código en componentes reutilizables
- **Tipado Estricto**: Aprovechamiento del sistema de tipos de TypeScript
- **Integración con APIs**: Uso de axios para comunicación HTTP

## 📋 Prerrequisitos

- Node.js (v14 o superior)
- npm o yarn
- TypeScript instalado globalmente (`npm install -g typescript`)

## 🔧 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/jaquimbayoc7/ProgramacionIII2025A.git

# Navegar al directorio del proyecto
cd ProgramacionIII2025A

# Instalar dependencias
yarn install
# o
npm install

# Instalar axios para comunicación HTTP
yarn add axios
# o
npm install axios

# Compilar el proyecto
yarn build
# o
npm run build

# Ejecutar en modo desarrollo
yarn dev
# o
npm run dev
```

## 📁 Estructura del Proyecto
```
ProgramacionIII2025A/
├── public/ # Archivos estáticos
├── src/ # Código fuente
│ ├── adapters/ # Implementaciones del patrón Adapter
│ ├── factories/ # Implementaciones del patrón Factory
│ ├── interfaces/ # Definiciones de interfaces TypeScript
│ ├── models/ # Modelos de datos
│ ├── repositories/ # Implementaciones del patrón Repository
│ ├── services/ # Servicios de la aplicación
│ └── index.ts # Punto de entrada principal
├── .gitignore # Archivos ignorados por Git
├── index.html # Página HTML principal
├── package.json # Dependencias y scripts
├── tsconfig.json # Configuración de TypeScript
└── README.md # Este archivo de readme
```
## 💻 Ejemplos de Código
Implementación de Interfaces
```
// src/interfaces/IUser.ts
export interface IUser {
  id: number;
  name: string;
  email: string;
  getFullDetails(): string;
}

// src/models/User.ts
import { IUser } from '../interfaces/IUser';

export class User implements IUser {
  constructor(
    public id: number,
    public name: string,
    public email: string
  ) {}

  getFullDetails(): string {
    return `Usuario ${this.id}: ${this.name} (${this.email})`;
  }
}
```
## Patrón Adapter
```
// src/interfaces/ILegacyAPI.ts
export interface ILegacyAPI {
  fetchUserData(id: number): { userId: number, userName: string, userEmail: string };
}

// src/interfaces/IModernAPI.ts
import { IUser } from './IUser';

export interface IModernAPI {
  getUser(id: number): IUser;
}

// src/adapters/UserAPIAdapter.ts
import { ILegacyAPI } from '../interfaces/ILegacyAPI';
import { IModernAPI } from '../interfaces/IModernAPI';
import { IUser } from '../interfaces/IUser';
import { User } from '../models/User';

export class UserAPIAdapter implements IModernAPI {
  constructor(private legacyAPI: ILegacyAPI) {}

  getUser(id: number): IUser {
    const legacyData = this.legacyAPI.fetchUserData(id);
    return new User(
      legacyData.userId,
      legacyData.userName,
      legacyData.userEmail
    );
  }
}
```
## Uso de Axios
```
// src/services/ApiService.ts
import axios from 'axios';
import { IUser } from '../interfaces/IUser';
import { User } from '../models/User';

export class ApiService {
  private baseUrl: string;
  
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  
  async getUsers(): Promise<IUser[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/users`);
      return response.data.map((userData: any) => 
        new User(userData.id, userData.name, userData.email)
      );
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }
}
```
## 📝 Patrones de Diseño Implementados
- Adapter: Convierte la interfaz de una clase en otra interfaz que los clientes esperan.
- Factory: Crea objetos sin exponer la lógica de instanciación.
- Singleton: Asegura que una clase tenga solo una instancia y proporciona un punto de acceso global a ella.
- Repository: Media entre el dominio y las capas de mapeo de datos.
- Strategy: Define una familia de algoritmos, encapsula cada uno y los hace intercambiables.
## 🤝 Contribución
- Haz un fork del repositorio
- Crea tu rama de características (git checkout -b feature/nueva-caracteristica)
- Haz commit de tus cambios (git commit -m 'Añadir nueva característica')
- Haz push a la rama (git push origin feature/nueva-caracteristica)
- Abre un Pull Request
## 📚 Recursos de Aprendizaje
- [Documentación oficial de TypeScript](https://www.typescriptlang.org/docs/)
- [Patrones de Diseño en TypeScript](https://refactoring.guru/design-patterns/typescript)
- [Clean Code en TypeScript](https://github.com/labs42io/clean-code-typescript)
- [Documentación de Axios](https://axios-http.com/docs/intro)
## 📄 Licencia
Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
