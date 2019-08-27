#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UITextDragURLPreviews_symbols(JSContext*);
@protocol UIDragPreviewURLPreviewsCategoryInstanceExports<JSExport>
@end
@protocol UIDragPreviewURLPreviewsCategoryClassExports<JSExport>
+(id) previewForURL: (NSURL *) url ;
+(id) previewForURL: (NSURL *) url title: (NSString *) title ;
@end
@protocol UITargetedDragPreviewURLPreviewsCategoryInstanceExports<JSExport>
@end
@protocol UITargetedDragPreviewURLPreviewsCategoryClassExports<JSExport>
+(id) previewForURL: (NSURL *) url title: (NSString *) title target: (UIDragPreviewTarget *) target ;
+(id) previewForURL: (NSURL *) url target: (UIDragPreviewTarget *) target ;
@end
#pragma clang diagnostic pop