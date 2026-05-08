import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(const WalletDemoApp());
}

class WalletDemoApp extends StatefulWidget {
  const WalletDemoApp({super.key});

  @override
  State<WalletDemoApp> createState() => _WalletDemoAppState();
}

class _WalletDemoAppState extends State<WalletDemoApp> {
  bool darkMode = false;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Wallet Demo',
      themeMode: darkMode ? ThemeMode.dark : ThemeMode.light,
      theme: ThemeData(
        textTheme: GoogleFonts.poppinsTextTheme(),
        primarySwatch: Colors.green,
      ),
      darkTheme: ThemeData.dark(),
      home: HomeScreen(
        onToggleTheme: () {
          setState(() {
            darkMode = !darkMode;
          });
        },
      ),
    );
  }
}