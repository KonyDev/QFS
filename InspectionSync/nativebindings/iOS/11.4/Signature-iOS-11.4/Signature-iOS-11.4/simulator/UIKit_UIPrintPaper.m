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
	class_addProtocol([UIPrintPaper class], @protocol(UIPrintPaperInstanceExports));
	class_addProtocol([UIPrintPaper class], @protocol(UIPrintPaperClassExports));
	class_addProtocol([UIPrintPaper class], @protocol(UIPrintPaperDeprecated_NonfunctionalCategoryInstanceExports));
	class_addProtocol([UIPrintPaper class], @protocol(UIPrintPaperDeprecated_NonfunctionalCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIPrintPaper_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
