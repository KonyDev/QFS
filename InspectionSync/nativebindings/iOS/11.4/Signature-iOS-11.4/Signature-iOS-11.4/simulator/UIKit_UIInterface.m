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
	context[@"UIBarStyleDefault"] = @0L;
	context[@"UIBarStyleBlack"] = @1L;
	context[@"UIBarStyleBlackOpaque"] = @1L;
	context[@"UIBarStyleBlackTranslucent"] = @2L;

	context[@"UIUserInterfaceSizeClassUnspecified"] = @0L;
	context[@"UIUserInterfaceSizeClassCompact"] = @1L;
	context[@"UIUserInterfaceSizeClassRegular"] = @2L;


	context[@"UIUserInterfaceLayoutDirectionLeftToRight"] = @0L;
	context[@"UIUserInterfaceLayoutDirectionRightToLeft"] = @1L;

	context[@"UITraitEnvironmentLayoutDirectionUnspecified"] = @-1L;
	context[@"UITraitEnvironmentLayoutDirectionLeftToRight"] = @0L;
	context[@"UITraitEnvironmentLayoutDirectionRightToLeft"] = @1L;

	context[@"UIDisplayGamutUnspecified"] = @-1L;
	context[@"UIDisplayGamutSRGB"] = @0L;
	context[@"UIDisplayGamutP3"] = @1L;

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
