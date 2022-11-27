{
  description = "A very basic flake";

  outputs = { self, nixpkgs }: {

    packages.x86_64-linux.friedow-com = with import nixpkgs { system = "x86_64-linux"; }; stdenv.mkDerivation {
      name = "node";
      buildInputs = [
        # Node
        gcc
        gnumake
        python3
        nodejs
        yarn
      ];
      
      shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
      '';
    };

    defaultPackage.x86_64-linux = self.packages.x86_64-linux.friedow-com;

  };
}
