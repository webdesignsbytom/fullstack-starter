# AI

## Jupyter

Project Jupyter is a project to develop open-source software, open standards, and services for interactive computing across multiple programming languages.

Jupyter create 'IPython' which is a Python REPL

## Jupyter Notebook

`jupter notebook` to start
`pip install --upgrade notebook` update

Jupyter notebook is a open source web for sharing code online for AI projects.
It was part of IPython project until it branched out onto a standard data science tool. Supporting over 40 languages.

### Key Features

1. You can create simplified 'Cells' of code that you can run indivdually.
2. Rich text suppport. Write descriptive text in markdown
3. Vizulizations. Intergates well with libraries like 'Matlibplot', 'Seaborn' and 'plotly' making it easy to create and display charts and graphs in the notebook.
4. Sharing. Notebooks are a .ipynb file type and can be converted to html and pdf.

## Jupyter Labs

`jupter lab` to start
`pip install --upgrade jupyterlab` update

A next generation interface for Project Jupyter and designed for a more powerful and flexible environment.
It using notebooks with a modern UI experience.
Essentially an IDE.

### Key Featuress

1. Multiple document interface. Many notebooks, terminals and files in one display.
2. Flexible layouts. Customize your workspace.
3. Intergrated tools. Built in file manager, terminals and text editor.
4. Extensibility. Modular architecture and extensions.


## Libraries

1. Numpy - Bath math for python
2. Pandas - Provides a data frame like an excel spradsheet in rows and columns
3. Matplotlib - 2D matrix plotting library
4. Scikit-learn - provides common algortythums like decision trees.

## Labs Commands

the ip is the address of the main machine sharing code.
The port is the port to check for a lab
`jupyter-lab --ip=192.168.1.150 --port=8888` allow another device on the next work to view the lab


## Datasets

`www.kaggle.com` for datasets
Sign in and go to 'dataset's
download the zip file and use inside you project with the path and
`pd.read_csv('path')`