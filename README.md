# PharmaB2B Application Setup Instructions

##  Prerequisites
- [**Python version: 3.10.4**](https://www.python.org/downloads/)
- [**PostgreSQL version: 14.5**](https://www.postgresql.org/download/)
- [**Node version: 16.18.0**](https://nodejs.org/en/download/)
- [**Yarn Package Manager**](https://classic.yarnpkg.com/lang/en/docs/install/)

## 1. Backend Setup

**1.1**
Generate python virtual env outside the project directory.
```bash
python -m venv env
```

**1.2**
Activate the virtual env.
```bash
Source path/env/bin/activate
```

**1.2**
Install project dependencies.
```bash
pip install -r pharmaB2B-backend/requirements.txt
```

**1.3**
Create Database Role and Instance in PostgreSQL. *[Make sure database is up and running]* <br/>
Go into the postreSQL *[default user may vary]*
```bash
psql -h localhost -d postgres -U postgres 
```
**1.4**
Execute the following commands.
```
CREATE USER pharmab2b WITH ENCRYPTED PASSWORD ‘pharmab2b’;
CREATE DATABASE pharmab2b WITH OWNER pharmab2b;
```
**1.5**
Load the environment variables from root folder of “source code” folder. 
```bash
source set_env
```

**1.6**
Go to /pharmaB2B-backend/ folder. Execute migrations
***1.7***
```bash
python manage.py migrate
```

**1.7**
.Data setup instructions.

**1.8**
The "mediafiles" folder is used to store files e.g. uploaded images of products, if it does not exist then
create it on root of project. /pharmaB2B/
```bash
touch mediafiles
```

## Frontend Setup

**2.1**
Go to the /pharmaB2B-frontend/pharmab2b/

**2.2**
Execute the following commands to install dependencies.
```bash
Yarn
```

**2.3**
Execute the following command to run node server.
```bash
Yarn start 
```