#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIDragItem_symbols(JSContext*);
@protocol UIDragItemInstanceExports<JSExport>
@property (nonatomic,strong) id localObject;
@property (getter=getJsPreviewProvider,setter=setJsPreviewProvider:) JSValue* jspreviewProvider;
@property (readonly,nonatomic) __kindof NSItemProvider * itemProvider;
JSExportAs(initWithItemProvider,
-(id) jsinitWithItemProvider: (NSItemProvider *) itemProvider );
@end
@protocol UIDragItemClassExports<JSExport>
@end
#pragma clang diagnostic pop