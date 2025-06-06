import 'package:flutter/material.dart';
import 'screens/home_screen.dart';
import 'screens/login_screen.dart';

void main() {
  runApp(const DevDockXApp());
}

class DevDockXApp extends StatelessWidget {
  const DevDockXApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'DevDockX',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF4F46E5), // Indigo color from web version
          brightness: Brightness.dark,
        ),
        useMaterial3: true,
        scaffoldBackgroundColor: const Color(
          0xFF0F172A,
        ), // slate-900 equivalent
      ),
      home: const HomeScreen(),
      routes: {'/login': (context) => const LoginScreen()},
    );
  }
}
