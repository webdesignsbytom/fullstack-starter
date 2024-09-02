# Database

## Types

1. SQL
2. PostgreSQL
3. NoSQL

## SQL

### Tools

- Install SQL Server
- Install SSMS (Management studio)

SQL server is the tables of data and the studio interacts with it. Its the database engine that manages everything and needs to be installed or connected to via instance.


### Commands

- `CREATE`
- `INSERT`

- `DATABASE` Pair with `CREATE DATABASE`

- Correctly drop a database

```sql
ALTER DATABASE [dbname]
SET SINGLE_USER --or RESTRICTED_USER
WITH ROLLBACK IMMEDIATE;
GO
DROP DATABASE [dbname];
GO
```
