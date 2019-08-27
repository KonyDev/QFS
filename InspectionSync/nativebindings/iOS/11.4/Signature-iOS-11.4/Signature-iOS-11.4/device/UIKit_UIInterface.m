#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
static void addProtocols()
{
	class_addProtocol([UIColor class], @protocol(UIColorUIColorSystemColorsCategoryInstanceExports));
	class_addProtocol([UIColor class], @protocol(UIColorUIColorSystemColorsCategoryClassExports));
	class_addProtocol([UIFont class], @protocol(UIFontUIFontSystemFontsCategoryInstanceExports));
	class_addProtocol([UIFont class], @protocol(UIFontUIFontSystemFontsCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIBarStyleDefault"] = @0;
	context[@"UIBarStyleBlack"] = @1;
	context[@"UIBarStyleBlackOpaque"] = @1;
	context[@"UIBarStyleBlackTranslucent"] = @2;

	context[@"UIUserInterfaceSizeClassUnspecified"] = @0;
	context[@"UIUserInterfaceSizeClassCompact"] = @1;
	context[@"UIUserInterfaceSizeClassRegular"] = @2;


	context[@"UIUserInterfaceLayoutDirectionLeftToRight"] = @0;
	context[@"UIUserInterfaceLayoutDirectionRightToLeft"] = @1;

	context[@"UITraitEnvironmentLayoutDirectionUnspecified"] = @-1;
	context[@"UITraitEnvironmentLayoutDirectionLeftToRight"] = @0;
	context[@"UITraitEnvironmentLayoutDirectionRightToLeft"] = @1;

	context[@"UIDisplayGamutUnspecified"] = @-1;
	context[@"UIDisplayGamutSRGB"] = @0;
	context[@"UIDisplayGamutP3"] = @1;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIInterface_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
