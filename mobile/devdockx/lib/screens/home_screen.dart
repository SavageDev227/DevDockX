import 'package:flutter/material.dart';
import '../widgets/custom_navbar.dart';
import '../widgets/hero_section.dart';
import '../widgets/features_section.dart';
import '../widgets/pricing_section.dart';
import '../widgets/call_to_action_section.dart';
import '../widgets/footer_section.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomNavBar(),
      body: const SingleChildScrollView(
        child: Column(
          children: [
            HeroSection(),
            FeaturesSection(),
            PricingSection(),
            CallToActionSection(),
            FooterSection(),
          ],
        ),
      ),
    );
  }
}
