#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIDragSession_symbols(JSContext*);
@protocol UIDropSessionInstanceExports_<JSExport, UIDragDropSessionInstanceExports_, NSProgressReportingInstanceExports_>
@property (readonly,nonatomic) id localDragSession;
@property (nonatomic) UIDropSessionProgressIndicatorStyle progressIndicatorStyle;
JSExportAs(loadObjectsOfClassCompletion,
-(NSProgress *) jsloadObjectsOfClass: (JSValue *) aClass completion: (JSValue *) completion );
@end
@protocol UIDropSessionClassExports_<JSExport, UIDragDropSessionClassExports_, NSProgressReportingClassExports_>
@end
@protocol UIDragSessionInstanceExports_<JSExport, UIDragDropSessionInstanceExports_>
@property (nonatomic,strong) id localContext;
@end
@protocol UIDragSessionClassExports_<JSExport, UIDragDropSessionClassExports_>
@end
@protocol UIDragDropSessionInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) NSArray * items;
@property (readonly,nonatomic) BOOL allowsMoveOperation;
@property (getter=isRestrictedToDraggingApplication,readonly,nonatomic) BOOL restrictedToDraggingApplication;
-(CGPoint) locationInView: (UIView *) view ;
JSExportAs(canLoadObjectsOfClass,
-(BOOL) jscanLoadObjectsOfClass: (JSValue *) aClass );
-(BOOL) hasItemsConformingToTypeIdentifiers: (NSArray *) typeIdentifiers ;
@end
@protocol UIDragDropSessionClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop