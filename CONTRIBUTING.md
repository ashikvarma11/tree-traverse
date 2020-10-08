### Installation

This project is completely built on React.

First, create a fork of the
[ashikvarma11/tree-traverse](https://github.com/ashikvarma11/tree-traverse) repo
by hitting the `fork` button on the GitHub page.

Next, clone our repository onto your computer with this command (replacing
YOUR_USERNAME with your actual GitHub username)

```sh
git clone git@github.com:ashikvarma11/tree-traverse.git
```

Once cloning is complete, change directory to the repo.

```sh
cd tree-traverse
```

Now add your fork as a remote

```sh
git remote add fork git@github.com:<YOUR_NAME>/tree-traverse.git
```

Create a new local branch

```sh
git checkout -b my-awesome-fix
```

## Preparing Your Local Environment for Development

Run the following commands to set up the development environment.

```sh
npm install
```

This will download and install all packages needed.

## Commiting and pushing

Run `npm check:prettier` and `npm format:prettier` before committing.

`pre-commit` and `post-receive` hooks are enabled which fails commit or PR if
code is not formatted.
