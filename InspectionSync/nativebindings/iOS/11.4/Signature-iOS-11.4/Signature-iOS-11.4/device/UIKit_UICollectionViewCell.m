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
	class_addProtocol([UICollectionReusableView class], @protocol(UICollectionReusableViewInstanceExports));
	class_addProtocol([UICollectionReusableView class], @protocol(UICollectionReusableViewClassExports));
	class_addProtocol([UICollectionViewCell class], @protocol(UICollectionViewCellInstanceExports));
	class_addProtocol([UICollectionViewCell class], @protocol(UICollectionViewCellClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UICollectionViewCellDragStateNone"] = @0;
	context[@"UICollectionViewCellDragStateLifting"] = @1;
	context[@"UICollectionViewCellDragStateDragging"] = @2;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UICollectionViewCell_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
